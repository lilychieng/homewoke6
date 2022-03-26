
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Homework 6: LCC2483</h1>
      <header className="App-header">

        <div class="flex-grid">
          <div class="flex-col">
            Your Input Request to Server
          </div>

          <div class="flex-col">
            Your Output Request to Server
          </div>
        </div>

        <div><LoginForm /></div>
      </header>
    </div>
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
  }

  handleSubmit(event) {
    alert('Logging in as: ' + this.state.password);
    event.preventDefault();
  }


  render() {
    return (
      <form id = "form" onSubmit={this.handleSubmit} >
        <div class="flex-grid">
          <div class="flex-col">
            <input id = "u-box-pads" type="text" value={this.state.username} onChange={this.handleUser} />
          </div>

          <div class="flex-col">
          <input id = "pw-box-pads" type="text" value={this.state.password} onChange={this.handlePW} />
          </div>
        </div>

        <div class ="flex-grid">
          <input type="submit" value="Submit" />
        </div>        

      </form>
    );
  }
}

export default App;
