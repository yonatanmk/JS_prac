import React from 'react';
import Dropdown from './Dropdown';

const Header = () => {

  let servicesDropdown = [
    { text: 'Web Design', link: '#!' },
    { text: 'Web Development', link: '#!' },
    { text: 'Graphic Design', link: '#!' },
    { text: 'React.js', link: '#!' },
    { text: 'Ruby on Rails', link: '#!' },
  ];

  let portfolioDropdown = [
    { text: 'Think Pawsitive', link: '#!' },
    { text: 'Schwamit', link: '#!' },
    { text: 'FlickList', link: '#!' },
  ];

  return (
    <nav>
      <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
      <ul className="nav-list">
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">About</a>
        </li>
        <li>
          <Dropdown
            label = 'Services'
            items = {servicesDropdown}
          />
        </li>
        <li>
          <a href="#!">Pricing</a>
        </li>
        <li>
          <Dropdown
            label = 'Portfolio'
            items = {portfolioDropdown}
          />
        </li>
        <li>
          <a href="#!">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
