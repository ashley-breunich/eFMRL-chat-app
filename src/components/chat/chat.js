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
        wordCount: 0,
        moniker: '',
        loggedIn: false,
      };
      socket.on('chat message', payload => this.updateWords(payload));
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
      socket.emit('chat message', this.state.typedInput);
    };
  
    handleNewWords = event => {
      this.setState({ typedInput: event.target.value });
    };

    handleNameSubmit = event => {
        event.preventDefault();
        this.setState({ 
            loggedIn: true,
            moniker: this.state.moniker
        });
        console.log(this.state.moniker, 'moniker');
    }

    handleName = event => {
        this.setState({ moniker: event.target.value });
      };
  
    render() {
      return (
        <>
        <If condition={!this.state.loggedIn}>
            <Moniker nameTracker={this.handleName} nameSubmit={this.handleNameSubmit}/>
        </If>
        <If condition={this.state.loggedIn}>
            <form onSubmit={this.handleSubmit}>
                <input
                    className='wordInput'
                    name="typedInput"
                    placeholder="Type your message here..."
                    onChange={this.handleNewWords}
                />
            </form>
            <ul>
                {Object.keys(this.state.words).map((words, idx) => {
                return (
                    <li key={this.state.words.length - (idx + 1)}>
                    {this.state.words[this.state.words.length - (idx + 1)]} <span className='monikerStyle'>{this.state.moniker}</span>
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