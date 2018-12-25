import './style.css';
import React, { Component } from 'react';
// import headImg from '@/assets/images/head-img.png';


class Header extends Component {
  render() {
    return (
      <div className="Header-form">

        <div className="Header-form-left">
          <div className="Header-form-input">
            <input className="form-input" />
          </div>
          <div className={ `Header-form-button ${this.props.styleColor}`}>
          使用手机注册
          </div>
        </div>
        <div className={ `Header-form-right ${this.props.styleColor}`}>
          使用微信注册
        </div>
      </div>
    );
  }
}

export default Header;
