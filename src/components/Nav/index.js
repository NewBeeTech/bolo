import './style.css';
import React, { Component } from 'react';

class Nav extends Component {
  props: {
    selected: {
      type: String
    }
  }
  state: {
    selected: {
      type: String
    }
  }
  componentWillMount() {
    this.setState({
      selected: this.props.selected
    })
  }
  handleList(type) {
    this.setState({
      selected: type
    })
  }
  render() {
    return (
      <div className="tabs tabs-style-linemove">
				<nav>
					<ul>
            <li>分类列表</li>
						<li
              className={this.state.selected === '' ? 'tab-current' : ''}
              onClick={() => this.handleList('')}
            >全部</li>
						<li
              className={this.state.selected === 'all' ? 'tab-current' : ''}
              onClick={() => this.handleList('all')}
            >整包</li>
						<li
              className={this.state.selected === 'small' ? 'tab-current' : ''}
              onClick={() => this.handleList('small')}
            >小程序</li>
						<li
              className={this.state.selected === 'app' ? 'tab-current' : ''}
              onClick={() => this.handleList('app')}
            >APP</li>
						<li
              className={this.state.selected === 'h5' ? 'tab-current' : ''}
              onClick={() => this.handleList('h5')}
            >H5</li>
					</ul>
				</nav>
			</div>
    );
  }
}
// Nav.defaultProps = {
//   selected: ''
// }
export default Nav;
