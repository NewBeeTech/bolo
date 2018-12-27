import './style.css';
// import './default.css';
import React, { Component } from 'react';
import twitter from '@/assets/images/twitter.svg';

const comments = [{
  content: '好用！！！👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻',
  user: 'Ralph_Keller'
}, {
  content: '太棒啦！从来没有兼顾奥这么好用的产品！相见恨晚！🏻',
  user: 'Frank_Todd'
}, {
  content: '自从知道了这个工具，我明天工作节省了4个小时的时间！再也不用加班啦！',
  user: 'Della_Morgan'
}]

class Comment extends Component {
  renderComment(comments) {
    const views = []
    comments.map((item, index) => {
      return views.push(
        <div className="Comment-content-item" key={index}>
          <div className="Comment-content-item-content">
            {item.content}
          </div>
          <div className="Comment-content-item-user">
            <img src={twitter} alt="twitter.svg" />@{item.user}
          </div>
        </div>
      )
    })
    return views
  }
  render() {
    return (
      <div className="Comment">
        <div className="Comment-title">
          看看用过的人怎么说
        </div>
        <div className="Comment-content">
          {this.renderComment(comments)}
        </div>
      </div>
    );
  }
}

export default Comment;
