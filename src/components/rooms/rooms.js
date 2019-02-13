import React from "react";
import io from 'socket.io-client';
const url = 'http://localhost:3000';
const socket = io.connect(url);

let currentRooms = ['general', 'sports', 'coding', 'fashion'];


class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log('prev props', state.placeholder);
    // console.log('current props', props.current);
    if(props.current !== state.placeholder){
        socket.emit('room', {current: props.current, previous: props.previous});
        return {
          placeholder: props.current
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