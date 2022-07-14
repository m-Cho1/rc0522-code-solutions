import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
    // always use setState to change the state.
  }

  render() {
    const isClicked = this.state.isClicked;

    if (isClicked) {
      return (
        <div>
          <button onClick={this.handleClick}>Thanks!</button>
        </div>
      );
    } else {
      return (
        <button onClick={this.handleClick}>Click me!</button>
      );
    }
  }
}

const element = (
  <div>
    <CustomButton text="Click me!" />
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(element);
