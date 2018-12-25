import './style.css';
// import './default.css';
import React, { Component } from 'react';
import headImg from '@/assets/images/head-img.png';

class Why extends Component {
  render() {
    return (
      <div className="Why">
        <div className="Why-title">
          <div className="Why-title-top">
            释放你的想象力
          </div>
          <div className="Why-desc">
            创意的边界在哪里？流程图、架构图、时序图、网络拓扑图、组织结构图等等<br />看看大家都用松鼠流程图做了什么
          </div>
        </div>
        <div className="Why-content">
          <img src={headImg} alt="why-content.png" />
          <img src={headImg} alt="why-content.png" />
          <img src={headImg} alt="why-content.png" />
        </div>
      </div>
    );
  }
}

export default Why;
