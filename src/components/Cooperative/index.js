import './style.css';
// import './default.css';
import React, { Component } from 'react';
import coopImg from '@/assets/images/coop-1.svg';

class Cooperative extends Component {
  render() {
    return (
      <div className="Cooperative">
        <div className="Cooperative-title">
          我们的客户
        </div>
        <div className="Cooperative-content">
          <img src={coopImg} alt="why-content.png" />
          <img src={coopImg} alt="why-content.png" />
          <img src={coopImg} alt="why-content.png" />
          <img src={coopImg} alt="why-content.png" />
        </div>
      </div>
    );
  }
}

export default Cooperative;
