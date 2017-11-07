import React from 'react';
import { connect } from 'react-redux';

import { Navbar,  NavItem } from 'react-materialize';

const Header = (props) => {
  
  return (
    <Navbar brand='Todo manager' right>      
      <NavItem className="nav-item">
          Urgent <span className="badge-item">{props.todos.filter((t)=>t.status==='u').length}</span>
      </NavItem>

      <NavItem className="nav-item">
          Normal <span className="badge-item">{props.todos.filter((t)=>t.status==='n').length}</span>
      </NavItem>

      <NavItem className="nav-item">
          Faible <span className="badge-item">{props.todos.filter((t)=>t.status==='f').length}</span>
      </NavItem>
    </Navbar>
  )
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps)(Header);
