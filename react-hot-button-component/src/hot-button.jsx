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
    let className = '';

    if (clicks < 4) {
      className = 'hot-btn-purple';
    } else if (clicks < 7) {
      className = 'hot-btn-light-purple';
    } else if (clicks < 10) {
      className = 'hot-btn-red';
    } else if (clicks < 13) {
      className = 'hot-btn-orange';
    } else if (clicks < 16) {
      className = 'hot-btn-yellow';
    } else {
      className = 'hot-btn-white';
    }

    return (
      <button onClick={this.handleClick} className={className}>Hot Button
      </button>
    );
  }
}

export default HotButton;
