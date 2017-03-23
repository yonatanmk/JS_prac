import React from 'react';

const Dropdown = (props) => {
  // debugger;
  let counter = 0;
  let items = props.items.map((item)=>{
    counter ++;
    return (
      <li key={counter}>
        <a href={item.link}>{item.text}</a>
      </li>
    );
  });

  return (
    <div>
      <a href="#!">{props.label + ' ▾'}</a>
      <ul className="nav-dropdown">
        {items}
      </ul>
    </div>
  );
};

export default Dropdown;
