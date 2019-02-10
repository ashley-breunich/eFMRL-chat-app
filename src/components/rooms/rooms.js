import React from "react";

let currentRooms = ['general', 'sports', 'coding'];

const Rooms = props => {
    return (
      <>
        <h2 className='roomTitle'>Rooms</h2>
            {Object.keys(currentRooms).map((room, idx) => {
            return (
                <button key={idx} onClick>
                {currentRooms[idx]}
                </button>
            );
            })}
      </>
    );
  };
  
  export default Rooms;