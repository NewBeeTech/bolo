import React, { Component } from 'react';
import HeaderNav from '@/components/HeaderNav';
import HeaderSlogan from '@/components/HeaderSlogan';
import HeaderForm from '@/components/HeaderForm';
import HeaderImg from '@/components/HeaderImg';
// import Nav from '@/components/Nav';
import Why from '@/components/Why';
import What from '@/components/What';
import Advantage from '@/components/Advantage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleColor: 'blue',
    };
  }
  onClickAction(type) {
    if (type === this.state.styleColor) return
    if (type === 'green') {
      this.setState({ styleColor: 'green'})
    } else if (type === 'blue') {
      this.setState({ styleColor: 'blue'})
    }
  }
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <HeaderNav onClickAction={(type) => this.onClickAction(type)} styleColor={this.state.styleColor} />
          <HeaderSlogan />
          <HeaderForm styleColor={this.state.styleColor} />
          <HeaderImg />
        </div>
        <div className="Home-content">
          <What />
          <Advantage />
          <Why />
        </div>
      </div>
    );
  }
}

export default Home;
