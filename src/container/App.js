import React, { Component } from 'react';

// Components
import Header from '../layout/Header';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from './TodoList';
import EditTodo from '../components/EditTodo';

// Style
import './App.css'


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
      todos:todos,
      editedTodo:null
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.setDone = this.setDone.bind(this);
    this.saveData = this.saveData.bind(this);
    this.setEditedTodo = this.setEditedTodo.bind(this);
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

  count(t){
    let total=0;
    this.state.todos.forEach((i)=>{
      if(i.status === t && i.done===false){
        total++;
      }
    })
    return total;
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
    this.saveData();
  }

  editTodo(todo){
    let prevState = this.state.todos;
    prevState.forEach((it)=>{
      if (it.text === todo.text){
        it = todo;
        return
      }
    });

    this.setState({todos: prevState, editedTodo:null});
    this.saveData()

    console.log('Edit : '+todo)
  }

  setEditedTodo(todo){
    this.setState({editedTodo: todo});    
  }

  saveData(){
    const json = JSON.stringify(this.state.todos);
    localStorage.setItem('todos',json)
  }

  setDone(todo){
    let prevState = this.state.todos
    prevState.forEach((t)=>{
      if(t.text === todo){
        t.done = !t.done;
        return
      }
    })
    console.log('Set as done : '+todo)
    this.setState({todos: prevState})
    this.saveData()
  }

  removeTodo(txt){
    console.log('remove '+txt)
  }

  render() {
    return (
      <div className="App container">
        <Header 
          urgent = {this.count('u')}
          normal = {this.count('n')}
          faible = {this.count('f')}
        />
        {this.state.editedTodo ?  <EditTodo todo={this.state.editedTodo} close={this.editTodo} isOpen={true}/>:''}
       
        <AddTodoForm addTodo = {this.addTodo}/>
        <TodoList
          todos={this.state.todos}
          remove={this.removeTodo}
          edit={this.editTodo}
          setEdited={this.setEditedTodo}
          setDone={this.setDone}
          />
      </div>
    );
  }
}
export default App;
