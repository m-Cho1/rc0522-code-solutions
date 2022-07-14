import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    const clicks = this.state.clicks;

    if (clicks < 4) {
      const className = 'hot-btn-purple';
      return (
        <div>
          <button onClick={this.handleClick} className={className}>Hot Button</button>
        </div>
      );
    } else if (clicks < 7) {
      const className = 'hot-btn-light-purple';
      return (
        <button onClick={this.handleClick} className={className}>Hot Button</button>
      );
    } else if (clicks < 10) {
      const className = 'hot-btn-red';
      return (
        <button onClick={this.handleClick} className={className}>Hot Button</button>
      );
    } else if (clicks < 13) {
      const className = 'hot-btn-orange';
      return (
        <button onClick={this.handleClick} className={className}>Hot Button</button>
      );
    } else if (clicks < 16) {
      const className = 'hot-btn-yellow';
      return (
        <button onClick={this.handleClick} className={className}>Hot Button</button>
      );
    } else {
      const className = 'hot-btn-white';
      return (
        <button onClick={this.handleClick} className={className}>Hot Button</button>
      );
    }
  }
}

export default HotButton;
