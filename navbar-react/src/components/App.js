import React, { Component } from 'react';
// import Dropdown from './Dropdown';
// import DropdownTrigger from './DropdownTrigger';
// import DropdownContent from './DropdownContent';
import Article from './Article';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <h1>Helllo World</h1>
        <Article />
      </div>
    );
  }
}

export default App;
