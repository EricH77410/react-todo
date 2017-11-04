import React from 'react'

import { Button } from 'react-materialize';

const Todo = (props) => {
  return (
    <div className="todo">
      <p className={props.item.done ? "done":"not-done" }>{props.item.text}</p>
      <div className="action">
        <Button
          onClick={()=>props.remove(props.item.id)}
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
          onClick={()=>props.setDone(props.item.id)}
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

export default Todo;
