import React from "react";
import If from "../if/if.js";

let existingUser = localStorage.getItem('eFMRL_user');
class MonikerLS extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  clearLSandRefresh = e => {
    localStorage.clear();
    window.location.reload();
  }
  render(){
    return (
      <>
        <h2>Welcome back {existingUser}!</h2>
        <button value = {existingUser} onClick={this.props.nameSubmit}>Log In</button>
        <hr/>
        <h3>NOT YOU? Click to sign in!</h3>
        <button onClick={this.clearLSandRefresh}>Sign In</button>
      </>
    );
    }
};

  export default MonikerLS;