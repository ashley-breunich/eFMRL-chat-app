import React from 'react';
import io from 'socket.io-client';

const url = 'http://localhost:3000';
const socket = io.connect(url);

class Chatter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        typedInput: '',
        words: [],
        wordCount: 0,
      };
      console.log(this.state.words)
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
  
    render() {
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <input
              name="typedInput"
              placeholder="New Words"
              onChange={this.handleNewWords}
            />
          </form>
          <ul>
          {Object.keys(this.state.words).map((words, idx) => {
            return (
              <li key={this.state.words.length - (idx - 1)}>
                {this.state.words[this.state.words.length - (idx + 1)]}
              </li>
            );
          })}
        </ul>
        </>
      );
    }
  }
  
  export default Chatter;