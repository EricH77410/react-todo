import React from 'react'
import { connect } from 'react-redux';
import { removeTodo, editTodo } from '../actions';
import moment from 'moment';

import { Button } from 'react-materialize';

// TODO: Mettre à jour le localStorage lors de la suppression d'un item
moment.locale('fr')

const Todo = (props) => {
  const id = props.item.id;
  return (
    <tr className="todo">
        <td className={props.item.done ? "done":"not-done" }>
            {props.item.text}
        </td>
        <td>{moment(props.item.deadLine).format('L')}</td>
        <td className="action">
        <Button
            onClick={()=>props.dispatch(removeTodo({id}))}
            floating
            className='red'
            waves='light'
            icon='remove'
        />
        <Button
            onClick={()=>props.setEdited({id})}
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
        </td>


    </tr>
  )
}

export default connect()(Todo);
