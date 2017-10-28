import React, { Component } from 'react';

// Components
import Header from '../layout/Header';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from './TodoList';


const todos = [
  {
    text: 'Aller faire les courses',
    done: false,
    status: 'n'
  },
  {
    text: 'Aller chercher Miles',
    done: false,
    status: 'n'
  },
]


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos:todos
    };
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  componentDidMount(){
    try {
          const td = JSON.parse(localStorage.getItem('todos'))
          if (td) {
            this.setState(()=>({todos: td}))
          }
  } catch(e) {
      // ne fais rien si les données du localStoareg sont pourries
      console.log(e);
    }
  }

  addTodo(todo) {
    console.log('add')
    const newTodo = {
      text:todo.txt,
      isDone: false,
      status: todo.status
    }
    const oldTodos = this.state.todos;
    oldTodos.push(newTodo);

    this.setState({todos: oldTodos})
    const json = JSON.stringify(this.state.todos);
    localStorage.setItem('todos',json)
  }

  removeTodo(txt){
    console.log('remove '+txt)
  }

  render() {
    return (
      <div className="App container">
        <Header />
        <AddTodoForm addTodo = {this.addTodo}/>
        <TodoList todos={this.state.todos} remove={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
