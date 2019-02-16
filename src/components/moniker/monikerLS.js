import React from 'react';

let existingUser = localStorage.getItem('eFMRL_user');
class MonikerLS extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <>
      <div className='center'>
        <h2 className='loginh2'>Welcome back, {existingUser}!</h2>
        <button className='loginButton' value = {existingUser} onClick={this.props.nameSubmit}>Log In</button>
        <h3 className='loginh3'>Not you? Click to sign in.</h3>
        <button className='loginButton' onClick={this.props.clear}>Sign In</button>
      </div>
      </>
    );
  }
}

export default MonikerLS;