import './style.css';
// import './animate.min.css';
// import './default.css';
import React, { Component } from 'react';
import what from '@/assets/images/what.svg';

class What extends Component {
  render() {
    return (
      <div className="What-container">
        <div className="What">
          <div className="What-left">
            <div className="What-left-title">
              绘制流程图可以很简单
            </div>
            <div className="What-left-desc">
              还在用Visio吗？我们重新设计了绘制流程图的每一个环节，让您制图时快如闪电。您只需要专注于您的思路和创意，其余的交给我们。
            </div>
          </div>
          <div className="What-right animated fadeInRight">
            <img src={what} alt="what.svg" />
          </div>
          </div>
      </div>
    );
  }
}

export default What;
