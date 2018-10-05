import React from 'react';
import { element } from 'prop-types';

const Header = () => ( 
  <h1> Home </h1>
)

Header.propTypes = {
  children: element
}

export default Header;