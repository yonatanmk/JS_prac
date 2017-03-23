import React, { Component } from 'react';
// import Dropdown from './Dropdown';
// import DropdownTrigger from './DropdownTrigger';
// import DropdownContent from './DropdownContent';
import Article from './Article';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <Header />
        <Article />
      </div>
    );
  }
}

export default App;
