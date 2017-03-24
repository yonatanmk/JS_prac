import React, { Component } from 'react';

class Dropdown extends Component {

  render () {
    let items;
    let counter = 0;
    if (this.props.id == this.props.openDropdown) {
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
      <div onMouseLeave={()=>this.props.setDropdown(null)}>
        <a href="#!" onMouseEnter={()=>this.props.setDropdown(this.props.id)}>{this.props.label + ' ▾'}</a>
        <ul className="nav-dropdown">
          {items}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
