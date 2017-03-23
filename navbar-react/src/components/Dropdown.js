import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState () {
    this.setState({ display: !this.state.display} );
  }

  render () {
    let items;
    let counter = 0;
    if (this.state.display) {
      items = this.props.items.map((item)=>{
        counter ++;
        return (
          <li key={counter}>
            <a href={item.link}>{item.text}</a>
          </li>
        );
      });
    }

    return (
      <div>
        <a href="#!" onClick={this.toggleState}>{this.props.label + ' ▾'}</a>
        <ul className="nav-dropdown">
          {items}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
