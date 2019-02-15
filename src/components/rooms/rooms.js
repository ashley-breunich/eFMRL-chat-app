import React from "react";
// import io from 'socket.io-client';
// const url = 'http://localhost:3000';
// // const socket = io.connect(url);

let currentRooms = ['general', 'sports', 'coding', 'fashion'];


class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderRoom: 'general',
      placeholderWords: {},
    };
  }
  
  render() {
      return (
        <>
          <h2 className='roomTitle'>Rooms</h2>
          <div className="buttonGroup">
              {Object.keys(currentRooms).map((room, idx) => {
              return (
                <button key={currentRooms[idx]} value={currentRooms[idx]} onClick={this.props.updateRooms} style={ (this.props.current === currentRooms[idx]) ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>
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