import './style.css';
// import './animate.min.css';
// import './default.css';
import React, { Component } from 'react';
import project from '@/assets/images/project.svg';
import arrow from '@/assets/images/arrow.svg';

class Project extends Component {
  render() {
    const { info } = this.props
    console.log(info)
    const typeValue = { 1: '整包', 2: '小程序', 3: 'APP', 4:'H5' }
    return (
      <div className="Project">
        <div className="Project-left">
          <div className="Project-left-time">
            <span className="Project-left-time-momth">{info.month}月</span>
            <span>{info.year}</span>
          </div>
        </div>
        <div className="Project-center">
          <img src={project} alt="项目截图" />
        </div>
        <div className="Project-right animated fadeInRight">
          <div className="Project-right-index">
            {info.index}
          </div>
          <div className="Project-right-pre">
            {info.pre}
          </div>
          <div className="Project-right-arrow">
            <span>显示案例<img src={arrow} alt="箭头" /></span>
          </div>
          <div className="Project-right-type">
            分类 - {typeValue[info.type]}
          </div>
          <div className="Project-right-name">
            {info.name}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
