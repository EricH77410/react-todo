import React, { Component } from 'react';

import Todo from '../components/Todo';

class TodoList extends Component {
  render(){
    const getItems = this.props.todos.map((it)=>{
      return <Todo item={it} key={it.text}/>
    })
    return(
      <div>
        {getItems}
      </div>
    );
  }
}

export default TodoList;
