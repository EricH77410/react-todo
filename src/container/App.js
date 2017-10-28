import React, { Component } from 'react';

// Components
import Header from '../layout/Header';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from './TodoList';


const todos = [
  {
    id: 1,
    text: 'Aller faire les courses',
    done: false,
    status: 'normal'
  },
  {
    id: 2,
    text: 'Aller chercher Miles',
    done: false,
    status: 'normal'
  },
]


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos:todos
    };
  }
  render() {
    return (
      <div className="App container">
        <Header />
        <AddTodoForm />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
