import React from "react";

let currentRooms = ['sports', 'coding', 'random'];

const Rooms = props => {
    return (
      <>
        <h2 className='roomTitle'>Rooms</h2>
        <ul>
            {Object.keys(currentRooms).map((room, idx) => {
            return (
                <li key={idx}>
                {currentRooms[idx]}
                </li>
            );
            })}
        </ul>
      </>
    );
  };
  
  export default Rooms;