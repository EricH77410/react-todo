import React from 'react'

import { Button } from 'react-materialize';

const Todo = (props) => {
  return (
    <div>
      <h5>{props.item.text}</h5>
      <Button onClick={()=>props.remove(props.item.text)} floating  className='red' waves='light' icon='remove' />
    </div>
  )
}

export default Todo;
