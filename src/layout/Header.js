import React from 'react';

import { Navbar, NavItem } from 'react-materialize';

const Header = () => {
  return (
    <Navbar brand='Todo manager' right>
      <NavItem href="">Link 1</NavItem>
      <NavItem href="">Link 2</NavItem>
    </Navbar>
  )
}

export default Header;
