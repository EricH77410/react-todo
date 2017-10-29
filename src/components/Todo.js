import React from 'react'

import { Button } from 'react-materialize';

const Todo = (props) => {
  return (
    <div>
      <h5>{props.item.text}</h5>
      <div className="action">
        <Button
          onClick={()=>props.remove(props.item.text)}
          floating
          className='red'
          waves='light'
          icon='remove'
        />
        <Button
          onClick={()=>props.edit(props.item.text)}
          floating
          icon='edit'
          tooltip='Edit element'
          className='orange'
          waves='light'
        />
        <Button
          onClick={()=>props.setDone(props.item.text)}
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
