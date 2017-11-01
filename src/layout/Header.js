import React from 'react';

import { Navbar, Badge, NavItem } from 'react-materialize';

const Header = (props) => {
  return (
    <Navbar brand='Todo manager' right className="nav-title">
      <NavItem>
        <Badge newIcon>
          Urgent {props.urgent}
        </Badge>
      </NavItem>

      <NavItem>
        <Badge newIcon>
          Normal {props.normal}
        </Badge>
      </NavItem>

      <NavItem>
        <Badge newIcon>
          Faible {props.faible}
        </Badge>
      </NavItem>

    </Navbar>
  )
}

export default Header;
