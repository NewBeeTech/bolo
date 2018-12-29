import './style.css';
import React, { Component } from 'react';
import headImg from '@/assets/images/head-img.png';


class Header extends Component {
  render() {
    return (
      <div className="HeaderImg">
        <img src={headImg} alt="head-img" />
      </div>
    );
  }
}

export default Header;
