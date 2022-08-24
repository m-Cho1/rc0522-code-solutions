import React from 'react';
class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.clickRight = this.clickRight.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.clickDots = this.clickDots.bind(this);
    this.intervalID = this.intervalID.bind(this);
  }

  clickRight(event) {
    if (this.state.count === this.props.images.length - 1) {
      this.setState({
        count: 0
      });
    } else {
      this.setState({
        count: this.state.count + 1
      });
    }
    clearInterval(this.timer);
    this.intervalID();
  }

  clickLeft(event) {
    if (this.state.count === 0) {
      this.setState({
        count: this.props.images.length - 1
      });
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
    clearInterval(this.timer);
    this.intervalID();
  }

  clickDots(event) {
    this.setState({
      count: Number(event.target.id)
    });
    clearInterval(this.timer);
    this.intervalID();
  }

  intervalID() {
    this.timer = setInterval(() => {
      if (this.state.count === this.props.images.length - 1) {
        this.setState({ count: 0 });
      } else {
        this.setState({ count: this.state.count + 1 });
      }
    }, 3000);
  }

  componentDidMount() {
    this.intervalID();
  }

  render() {
    return (
      <>
        <div className='carousel'>
          <div className='row'>
            <div className='col-10'>
              <i className="fas fa-chevron-left fa-3x" onClick={this.clickLeft}></i>
            </div>
            <div className='col-80'>
              <img src={`${this.props.images[this.state.count].imgLink}`} alt="" />
            </div>
            <div className='col-10'>
              <i className="fas fa-chevron-right fa-3x" onClick={this.clickRight}></i>
            </div>
          </div>
        </div>
        <div className="dots-container">
          {
            this.props.images.map((name, index) => {
              const dotsColor = this.state.count === index
                ? 'fas fa-circle'
                : 'far fa-circle';
              return (
                <i key={index} id={index} className={dotsColor} onClick={this.clickDots}></i>
              );
            })
          }
        </div>
      </>
    );
  }
}

export default Carousel;
