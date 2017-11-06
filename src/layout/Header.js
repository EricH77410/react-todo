import React from 'react';
import { connect } from 'react-redux';

import { Navbar,  NavItem } from 'react-materialize';

const Header = (props) => {

  return (
    <Navbar brand='Todo manager' right>
      <NavItem className="nav-item">
          Urgent {props.urgent}
      </NavItem>

      <NavItem className="nav-item">
          Normal {props.normal}
      </NavItem>

      <NavItem className="nav-item">
          Faible {props.faible}
      </NavItem>
    </Navbar>
  )
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps)(Header);
