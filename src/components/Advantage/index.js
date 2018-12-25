import './style.css';
// import './animate.min.css';
// import './default.css';
import React, { Component } from 'react';
import fast from '@/assets/images/fast.svg';
import goodLooking from '@/assets/images/good-looking.svg';
import cooperation from '@/assets/images/cooperation.svg';

class Advantage extends Component {
  render() {
    return (
      <div className="Advantage">
        <div className="Advantage-item">
          <div className="Advantage-img animated fadeInRight">
            <img src={fast} alt="what.svg" />
          </div>
          <div className="Advantage-title">
            真的很快
          </div>
          <div className="Advantage-desc">
            精心优化的每一处细节，均为了让你更流畅的制图，节省下每一秒钟。
          </div>
        </div>

        <div className="Advantage-item">
          <div className="Advantage-img animated fadeInRight">
            <img src={goodLooking} alt="what.svg" />
          </div>
          <div className="Advantage-title">
            还很好看
          </div>
          <div className="Advantage-desc">
            反复打磨每一个字体、配色与图形，让你可以轻松导出漂亮的图片，不再为样式发愁。
          </div>
        </div>

        <div className="Advantage-item">
          <div className="Advantage-img left animated fadeInRight">
            <img src={cooperation} alt="what.svg" />
          </div>
          <div className="Advantage-title">
            还能跨平台协作
          </div>
          <div className="Advantage-desc">
            只要连上网络，无需下载安装，不论Windows/Mac/Pad均可实时在线协作。
          </div>
        </div>
      </div>
    );
  }
}

export default Advantage;
