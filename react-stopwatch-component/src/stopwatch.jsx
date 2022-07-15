import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      isPlaying: false,
      time: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    if (this.state.isPlaying === false) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  startTimer() {
    const interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
    this.setState({
      intervalId: interval,
      isPlaying: true,
      time: this.state.time
    });

  }

  stopTimer() {
    clearInterval(this.state.intervalId);
    this.setState({
      isPlaying: false,
      time: this.state.time
    });
  }

  reset() {
    if (this.state.isPlaying === false) {
      this.setState({
        time: 0,
        isPlaying: this.state.isPlaying
      });
    }
  }

  render() {
    let icon = '';
    if (this.state.isPlaying) {
      icon = 'fa-pause';
    } else {
      icon = 'fa-play';
    }
    return (
      <div className='row'>
        <div onClick={this.reset} className='stopwatch'>
          <p className='number'>{this.state.time}</p>
        </div>
        <div className='btn'>
          <i onClick={this.handleClick} className={'fas ' + icon}></i>
        </div>
      </div>
    );
  }
}

export default StopWatch;
