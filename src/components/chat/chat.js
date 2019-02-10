import React from 'react';
import io from 'socket.io-client';
import Moniker from '../moniker/moniker.js';
import Rooms from '../rooms/rooms.js';
import If from '../if/if.js';

const url = 'http://localhost:3000';
const socket = io.connect(url);

let room = "sports"; 

class Chatter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        typedInput: '',
        rooms: {
            general: {
                wordCount: 0,
                words: [],
                tempNames: [],
            }
        },
        // words: [],
        // tempNames: [],
        // wordCount: 0,
        moniker: '',
        loggedIn: false,
        inputVal: 'Type your message here...',
        error: '',
        currentRoom: 'general',
      };
        socket.on('chat message', (payload) => {
            this.updateWords(payload.content);
            this.updateNicknames(payload.moniker);
            // this.updateRoom(payload.room);
        });
    }

    updateNicknames = nickname => {
        let curr = this.state.currentRoom
        // console.log('currentroom', this.state.currentRoom);
        if (this.state.rooms[curr].wordCount > 15) {
            this.state.rooms[curr].tempNames.shift();
        }
        this.setState({ rooms: {...this.state.rooms, [curr]: {...this.state.rooms[curr], tempNames: [...this.state.rooms[curr].tempNames, nickname] }} })
        // this.setState({ tempNames: [...this.state.tempNames, nickname] });
        console.log('nickname', this.state.rooms[curr].tempNames);
    }

    // updateRoom = room => {
    //     if (room !)
    // }
  
    updateWords = words => {
        let curr = this.state.currentRoom;
        this.setState({
            rooms: {...this.state.rooms, [curr]: {...this.state.rooms[curr], wordCount: this.state.rooms[curr].wordCount + 1 }}
        })
        // this.setState({ wordCount: this.state.wordCount + 1 });
        console.log('word count', this.state.rooms[curr].wordCount);
        if (this.state.rooms[curr].wordCount > 15) {
            this.state.rooms[curr].words.shift();
        }
        this.setState({ rooms: {...this.state.rooms, [curr]: {...this.state.rooms[curr], words: [...this.state.rooms[curr].words, words] }} })
        // this.setState({ words: [...this.state.words, words] });
        console.log('word', this.state.rooms[curr].words);
    };
  
    handleSubmit = event => {
      event.preventDefault();
      event.target.reset();
      socket.emit('chat message', this.state.typedInput);
    };
  
    handleNewWords = event => {
      this.setState({ typedInput: event.target.value });
    };

    handleNameSubmit = event => {
       event.preventDefault();
       this.setState({ 
           moniker: this.state.typedInput,
       });

       socket.emit('new user', this.state.moniker, (data) => {
           if(data) {
               this.setState({
                    loggedIn: true,
               });
               socket.emit('room', this.state.currentRoom);
           } else {
                this.setState({
                    error: 'This moniker is already taken. Please choose another one.',
                });
           }
       });
    }

    handleName = event => {
        this.setState({ moniker: event.target.value });
    };
  
    render() {
      return (
        <>
        <If condition={!this.state.loggedIn}>
            <Moniker nameTracker={this.handleName} nameSubmit={this.handleNameSubmit} error={this.state.error}/>
        </If>
        <If condition={this.state.loggedIn}>
        <div className='chatWrapper'>
            <div className="roomColumn">
                <Rooms />
            </div>
            <div className="chatColumn">
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='wordInput'
                        name="typedInput"
                        placeholder={this.state.inputVal}
                        onChange={this.handleNewWords}
                    />
                </form>
                <ul>
                    {Object.keys(this.state.rooms[this.state.currentRoom].words).map((words, idx) => {
                    return (
                        <li key={this.state.rooms[this.state.currentRoom].words.length - (idx + 1)}>
                        {this.state.rooms[this.state.currentRoom].words[this.state.rooms[this.state.currentRoom].words.length - (idx + 1)]} <span className='monikerStyle'>{this.state.rooms[this.state.currentRoom].tempNames[this.state.rooms[this.state.currentRoom].tempNames.length - (idx + 1)]}</span>
                        </li>
                    );
                    })}
                </ul>
            </div>
        </div>
        </If>
        </>
      );
    }
  }
  
  export default Chatter;