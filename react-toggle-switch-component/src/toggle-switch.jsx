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
    let status = '';
    let text = 'Off';

    if (this.state.toggle) {
      status = '-active';
      text = 'On';
    }

    return (
      <div className='row'>
        <div className={`slider slider${status}`}>
          <div className={`btn btn${status}`} onClick={this.handleToggle}></div>
        </div>
        <div>
          <p className='padding'>{text}</p>
        </div>
      </div>
    );
  }
}
export default ToggleButton;
