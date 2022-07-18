import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleIndex: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const target = event.target.id;
    for (let i = 0; i < this.props.data.length; i++) {
      if (target === this.props.data[i].title) {
        this.setState({ visibleIndex: i });
      }
    }
  }

  render() {
    return (
      <div className='accordion'>
        {this.props.data.map((topic, index) => {
          return (
            <div key={index.toString()} className='title'>
              <h3 id={topic.title} onClick={this.handleClick}>{topic.title}</h3>
              <p className={index === this.state.visibleIndex ? '' : 'hidden'}>
                {topic.description}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Accordion;
