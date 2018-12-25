import './style.css';
import React, { Component } from 'react';
import headImg from '@/assets/images/head-img.png';


class Header extends Component {
  render() {
    return (
      <div className="Header-img" style={{backgroundImage: `url(${headImg})`, backgroundSize: 'cover'}}>
      </div>
    );
  }
}

export default Header;
