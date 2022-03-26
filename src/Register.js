import React from 'react';

export default function Register() {
    return(
        <main>
            <h1>Register</h1>
            <div><LoginForm /></div>
            <br></br>
        </main>
    );
}

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '', password: ''};
      this.handleUser = this.handleUser.bind(this);
      this.handlePW = this.handlePW.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleUser(event) {
      this.setState({username: event.target.value});
    }
    handlePW(event) {
      this.setState({password: event.target.value});
      // sha256Lib.sha256(event.target.value).then( hash => {
      //   this.setState({password: hash});
      // })
    }
  
    handleSubmit(event) {
      alert('Logging in as: ' + this.state.password);
      event.preventDefault();
    }
  
  
    render() {
      return (
        <form id = "form" onSubmit={this.handleSubmit} >
          <label id = "center-elem">
            First Name: 
            <input id = "u-box-pads" type="text" value={this.state.username} onChange={this.handleUser} />
          </label>
          <br />
          <label id = "center-elem">
            Last Name:
            <input id = "pw-box-pads" type="text" value={this.state.password} onChange={this.handlePW} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }