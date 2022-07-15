import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert('Sign up successful');
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
            </label>
          <label>
            Password
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </label>
          <input type="submit" value='Sign Up' onChange={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

const element = (
  <div>
    <RegistrationForm />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
