import uuid from 'uuid';

export const addTodo = ({ text, status } = {}) => {

  return {
    type:'ADD_TODO',
    todo: {
      text,
      status,
      id: uuid()
    }
  }
}

export const removeAll = () => {
  return {
    type: 'REMOVE_ALL'
  }
}

export const saveAll = () => {
  return {
    type:'SAVE_ALL'
  }
}

export const loadTodos = () => {
  return {
    type:'LOAD_TODO'
  }
}

export const removeTodo = ({ id } = {}) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export const editTodo = ({ id, payload } = {}) => {
  return {
    type: 'EDIT_TODO',
    id,
    payload
  }
}
