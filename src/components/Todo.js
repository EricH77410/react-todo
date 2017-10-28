import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <h4>{props.item.text}</h4>
    </div>
  )
}

export default Todo;
