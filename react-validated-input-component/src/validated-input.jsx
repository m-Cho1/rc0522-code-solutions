import React from 'react';

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      message: 'Password is required'
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(event) {
    const value = event.target.value;

    if (value === '') {
      this.setState({ message: 'Password is required' });
      return;
    }
    if (value.length < 8) {
      this.setState({ message: 'Your password is too short' });
      return;
    }

    this.setState({
      message: '',
      password: value
    });

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    let icon;
    if (this.state.message === '') {
      icon = 'fa-check checkmark';
    } else {
      icon = 'fa-xmark wrong-mark';
    }

    return (
      <div>
        <form onClick={this.handleSubmit}>
          <p className='bold margin-bottom'>Password</p>
          <label htmlFor='password'>
            <input
            name='password'
            id='password'
            type="password"
            required
            onChange={this.handlePasswordChange} />
          </label>
          <span>
            <i className={`padding fa-solid ${icon}`}></i>
          </span>
          <p className='font-style margin-top'>{this.state.message}</p>
        </form>
      </div>
    );
  }
}

export default ValidateInput;
