import React from "react";

const Moniker = props => {
    return (
     <form className='loginForm' onSubmit={props.nameSubmit}>
        <input
          className='loginInput'
          name="typedInput"
          placeholder="What is your name?"
          onChange={props.nameTracker}
        />
      </form>
    );
  };
  
  export default Moniker;