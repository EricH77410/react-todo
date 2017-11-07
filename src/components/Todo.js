import React from 'react'
import { connect } from 'react-redux';
import { removeTodo, editTodo } from '../actions';

import { Button } from 'react-materialize';

// TODO: Mettre à jour le localStorage lors de la suppression d'un item

const Todo = (props) => {
  const id = props.item.id;
  return (
    <div className="todo">
      <p className={props.item.done ? "done":"not-done" }>{props.item.text}</p>
      <div className="action">
        <Button
          onClick={()=>props.dispatch(removeTodo({id}))}
          floating
          className='red'
          waves='light'
          icon='remove'
        />
        <Button
          onClick={()=>props.setEdited(props.item)}
          floating
          icon='edit'
          tooltip='Edit element'
          className='orange'
          waves='light'
        />
        <Button
          onClick={()=>props.dispatch(editTodo({
            id,
            payload: {done:!props.item.done}
          }))}
          floating
          icon='checked'
          tooltip='Set as done'
          className='blue'
          waves='light'
        />
      </div>

    </div>
  )
}

export default connect()(Todo);
