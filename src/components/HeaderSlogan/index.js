import './style.css';
import React, { Component } from 'react';
// import headImg from '@/assets/images/head-img.png';


class Header extends Component {
  render() {
    return (
      <div className="Header-slogan">
        <div className="Header-slogan-title">简洁高效的流程图制作工具</div>
        <div className="Header-img-desc">松鼠流程图可以帮助你更便捷的具象化你的想法、设计出精致的流程图，并可以与你的合作伙伴实时协作或共享成果</div>
      </div>
    );
  }
}

export default Header;
