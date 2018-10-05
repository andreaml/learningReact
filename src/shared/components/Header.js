import React from 'react';
import { element } from 'prop-types';
import { Link } from 'react-router-dom';

const Header = () => ( 
  <div className="Header">
    <h1>ReactBasics</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
    </ul>
  </div>
)

Header.propTypes = {
  children: element
}

export default Header;