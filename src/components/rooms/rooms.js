import React from "react";
import io from 'socket.io-client';
const url = 'http://localhost:3000';
const socket = io.connect(url);

let currentRooms = ['general', 'sports', 'coding', 'fashion'];


class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderRoom: 'sports',
      placeholderWords: {},
    };
  }

  // this.state.rooms[this.state.currentRoom].words

  // static getDerivedStateFromProps(props, state) {
  //   // console.log('prev props', state.placeholderRoom);
  //   // console.log('current props', props.current);
  //   // console.log('state', state);
  //   // console.log('parentState', props.parentState.rooms);
  //   if(props.current !== state.placeholderRoom || props.parentState.rooms !== state.placeholderWords){
  //     console.log('props.parentState.rooms', props.parentState.rooms)
  //     console.log('state.placeholderWords', state.placeholderWords)
  //       socket.emit('room', {current: props.current, previous: props.previous});
  //       return {
  //         placeholderRoom: props.current,
  //         placeholderWords: props.parentState.rooms
  //       }
  //   }
  //   if(props.current )
  //   return {
  //      placeholder: props.current
  //   }
  // }

  static getDerivedStateFromProps(props, state) {
      if(props.current !== state.placeholderRoom){
        console.log('props.parentState.rooms', props.parentState.rooms)
        console.log('state.placeholderWords', state.placeholderWords)
          socket.emit('room', {current: props.current, previous: props.previous});
          return {
            placeholderRoom: props.current,
            // placeholderWords: props.parentState.rooms
          }
      }
      return {
         placeholder: props.current
      }
    }
  
  render() {
      return (
        <>
          <h2 className='roomTitle'>Rooms</h2>
          <div className="buttonGroup">
              {Object.keys(currentRooms).map((room, idx) => {
              return (
                    <button key={currentRooms[idx]} value={currentRooms[idx]} onClick={this.props.updateRooms}>
                    {currentRooms[idx]}
                    </button>
              );
              })}
          </div>
        </>
      );
    }
  };
  
  export default Rooms;