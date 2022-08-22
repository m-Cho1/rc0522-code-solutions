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

  clickRight() {

  }

  clickLeft() {

  }

  clickDots() {

  }

  intervalID() {

  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-10'>
              <i className="fas fa-chevron-left fa-3x"></i>
            </div>
            <div className='col-80'>
              <img src={`${this.props.images[this.state.count].imgLink}`} alt="" />
            </div>
            <div className='col-10'>
              <i className="fas fa-chevron-right fa-3x"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
