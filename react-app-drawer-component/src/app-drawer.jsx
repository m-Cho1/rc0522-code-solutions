import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuOpen() {
    this.setState({ isOpen: true });
  }

  handleMenuClose() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    let hidden = '';
    let menu = '';
    let overlay = 'hidden';
    if (this.state.isOpen) {
      menu = 'nav-bar-open';
      hidden = 'hidden';
      overlay = '';
    } else {
      menu = 'nav-bar-close';
    }
    return (
      <div className='container'>
        <div className={hidden}>
          <i className='fa-solid fa-bars' onClick={this.handleMenuOpen}></i>
        </div>
        <div className={`nav-bar ${menu}`}>
          <h3 className='padding-left'>Menu</h3>
          <ul>
            <li><a href='#' onClick={this.handleMenuClose}>About</a></li>
            <li><a href="#" onClick={this.handleMenuClose}>Get Started</a></li>
            <li><a href="#" onClick={this.handleMenuClose}>Sign In</a></li>
          </ul>
        </div>
        <div className={`overlay ${overlay}`} onClick={this.handleMenuClose}></div>
      </div>
    );
  }
}

export default AppDrawer;
