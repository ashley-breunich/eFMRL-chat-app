import React from 'react';
import io from 'socket.io-client';
import Moniker from '../moniker/moniker.js';
import If from '../if/if.js';

const url = 'http://localhost:3000';
const socket = io.connect(url);

class Chatter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        typedInput: '',
        words: [],
        tempNames: [],
        wordCount: 0,
        moniker: '',
        loggedIn: false,
        inputVal: 'Type your message here...',
        error: '',
      };
    //   socket.on('chat message', payload => this.updateWords(payload.msg));
        socket.on('chat message', (payload) => {
            this.updateWords(payload.msg);
            this.updateNicknames(payload.nickname);
        });
    }

    updateNicknames = nickname => {
        if (this.state.wordCount > 15) {
            this.state.tempNames.shift();
        }
        this.setState({ tempNames: [...this.state.tempNames, nickname] });
        console.log('nickname', this.state.tempNames);

    }
  
    updateWords = words => {
        this.setState({ wordCount: this.state.wordCount + 1 });
        console.log('word count', this.state.wordCount);
        if (this.state.wordCount > 15) {
          this.state.words.shift();
      }
        this.setState({ words: [...this.state.words, words] });
        console.log('word', this.state.words);
    };
  
    handleSubmit = event => {
      event.preventDefault();
      event.target.reset();
      socket.emit('chat message', this.state.typedInput);
      console.log(this.state);
    };
  
    handleNewWords = event => {
      this.setState({ typedInput: event.target.value });
    };

    // handleNameSubmit = event => {
    //    event.preventDefault();
    //    this.setState({ 
    //     loggedIn: true,
    //     moniker: this.state.typedInput,
    //    });
    //    socket.emit('new user', this.state.moniker);
    // }

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
            <form onSubmit={this.handleSubmit}>
                <input
                    className='wordInput'
                    name="typedInput"
                    placeholder={this.state.inputVal}
                    onChange={this.handleNewWords}
                />
            </form>
            <div className='users'></div>
            <ul>
                {Object.keys(this.state.words).map((words, idx) => {
                return (
                    <li key={this.state.words.length - (idx + 1)}>
                    {this.state.words[this.state.words.length - (idx + 1)]} <span className='monikerStyle'>{this.state.tempNames[this.state.tempNames.length - (idx + 1)]}</span>
                    </li>
                );
                })}
            </ul>
        </If>
        </>
      );
    }
  }
  
  export default Chatter;