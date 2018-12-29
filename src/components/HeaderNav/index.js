import './style.css';
import React, { Component } from 'react';
import logo from '@/assets/images/logo.svg';
import { Link } from "react-router-dom";

class HeaderNav extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="Header-nav">
          <img className="Header-logo" src={logo} alt="logo" />
          <ul className="Header-nav-ul">
            <li>
              <Link to="/">功能介绍</Link>
            </li>
            <li>
              <Link to="/about-us">套餐价格</Link>
            </li>
            <li>
              <Link to="/mg-desgin">联系我们</Link>
            </li>
            <li>
              <Link to="/mg-desgin">登录</Link>
            </li>
            <li>
              <button className={ `logon-button ${this.props.styleColor}`}>立即注册</button>
            </li>
            <li>
              <div className="Header-switch">
                <div
                  className={ `Header-item ${this.props.styleColor === 'blue' ? 'blue' : ''}`}
                  onClick={this.props.onClickAction.bind(this, 'blue')}
                >切换</div>
                <div
                  className={ `Header-item ${this.props.styleColor === 'green' ? 'green' : ''}`}
                  onClick={this.props.onClickAction.bind(this, 'green')}
                >切换</div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default HeaderNav;
