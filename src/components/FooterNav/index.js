import './style.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FooterNav extends Component {
  render() {
    return (
      <div className="FooterNav-container">
        <nav className="Footer-nav">
          <ul className="Footer-nav-ul">
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/">功能介绍</Link>
            </li>
            <li>
              <Link to="/about-us">套餐价格</Link>
            </li>
            <li>
              <Link to="/mg-desgin">联系我们</Link>
            </li>
          </ul>
          <ul className="Footer-nav-ul">
            <li>
              <button className="logon-button">使用手机注册</button>
            </li>
            <li>
              <button className="logon-button">使用微信注册</button>
            </li>
          </ul>

        </nav>
      </div>
    );
  }
}

export default FooterNav;
