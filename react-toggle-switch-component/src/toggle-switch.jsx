import React from 'react';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.state.toggle) {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
  }

  render() {
    if (this.state.toggle) {
      return (
        <div className='row'>
          <div className='slider slider-active'>
            <div className='btn btn-active' onClick={this.handleToggle}></div>
          </div>
          <div>
            <p className='padding'>On</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className='row'>
          <div className='slider'>
            <div className='btn' onClick={this.handleToggle}></div>
          </div>
          <div>
            <p className='padding'>Off</p>
          </div>
        </div>
      );
    }
  }
}

export default ToggleButton;
