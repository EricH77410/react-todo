import React from 'react';
import { connect } from 'react-redux';
import { setTodoTypeFilter } from '../actions/filter';

import { Navbar,  NavItem } from 'react-materialize';

const Header = (props) => {
  
  return (
    <Navbar brand='Todo manager' right>  
      <NavItem className="nav-item" onClick={(e)=>{
          e.preventDefault();
          props.dispatch(setTodoTypeFilter('all'))
          }}>
          Total <span className="badge-item">{props.todos.length}</span>
      </NavItem>
      <NavItem className="nav-item" onClick={(e)=>{
          e.preventDefault(); 
          console.log('set filter all');
          props.dispatch(setTodoTypeFilter('done'))
          }}>
          Done <span className="badge-item">{props.todos.filter((t)=>t.done===true).length}</span>
      </NavItem>
      <NavItem className="nav-item" onClick={(e)=>{
          e.preventDefault(); 
          console.log('set filter all');
          props.dispatch(setTodoTypeFilter('pending'))
          }}>
          Pending <span className="badge-item">{props.todos.filter((t)=>t.done===false).length}</span>
      </NavItem>     
      <NavItem className="nav-item" onClick={(e)=>{
          e.preventDefault(); 
          console.log('set filter all');
          props.dispatch(setTodoTypeFilter('u'))
          }}>
          Urgent <span className="badge-item">{props.todos.filter((t)=>t.status==='u').length}</span>
      </NavItem>
      <NavItem className="nav-item" onClick={(e)=>{
          e.preventDefault(); 
          console.log('set filter all');
          props.dispatch(setTodoTypeFilter('n'))
          }}>
          Normal <span className="badge-item">{props.todos.filter((t)=>t.status==='n').length}</span>
      </NavItem>

      <NavItem className="nav-item" onClick={(e)=>{
          e.preventDefault(); 
          console.log('set filter all');
          props.dispatch(setTodoTypeFilter('f'))
          }}>
          Faible <span className="badge-item">{props.todos.filter((t)=>t.status==='f').length}</span>
      </NavItem>
    </Navbar>
  )
}

const mapStateToProps = (state) => {
  return {
      todos: state.todos,
      filter: state.filter
    }
}

export default connect(mapStateToProps)(Header);
