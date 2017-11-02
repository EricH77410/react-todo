import React, { Component } from 'react';

// Components
import Header from '../layout/Header';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from './TodoList';
import EditTodo from '../components/EditTodo';

// Style
import './App.css'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos:[],
      editedTodo:null
    };
    this.addTodo        = this.addTodo.bind(this);
    this.removeTodo     = this.removeTodo.bind(this);
    this.editTodo       = this.editTodo.bind(this);
    this.setDone        = this.setDone.bind(this);
    this.saveData       = this.saveData.bind(this);
    this.setEditedTodo  = this.setEditedTodo.bind(this);
    this.removeAll      = this.removeAll.bind(this);
    this.clearEditTodo  = this.clearEditTodo.bind(this);
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
  
  removeAll(){
    this.setState({todos:[]})
    this.saveData();
  }

  addTodo(todo) {
    console.log('add')
    const newTodo = {
      id:new Date(),
      text:todo.txt,
      isDone: false,
      status: todo.status
    }
    const oldTodos = this.state.todos;
    oldTodos.push(newTodo);

    this.setState({todos: oldTodos}, ()=>{
      this.saveData();
    })    
  }

  editTodo(todo){    
    let prevState = this.state.todos;
    prevState.forEach((it)=>{
      if (it.id === todo.id){
        it.text = todo.text;
        it.status= todo.status;
        it.done = todo.done;
      }
    });
    this.setState({todos: prevState, editedTodo:null},()=>{
      this.saveData()
    });    
  }

  setEditedTodo(todo){
    this.setState({editedTodo: todo});    
  }

  clearEditTodo(){
    this.setState({editedTodo: null})
  }

  saveData(){
    const json = JSON.stringify(this.state.todos);
    localStorage.setItem('todos',json)
  }

  setDone(id){
    const prevState = this.state.todos
    let newState = []
    prevState.forEach((t)=>{
      if(t.id === id){
        t.done = !t.done;
      }
      newState.push(t)
    })
    this.setState({todos: newState}, ()=>{
      this.saveData()
    });    
  }

  removeTodo(id){
    let newState = this.state.todos.filter((it)=>{
      return it.id !== id;
    })
    this.setState({todos: newState}, ()=>{
      this.saveData();
    });
    
  }

  render() {
    return (
      <div className="App container">
        <Header 
          urgent = {this.count('u')}
          normal = {this.count('n')}
          faible = {this.count('f')}
        />
        {this.state.editedTodo ?  <EditTodo todo={this.state.editedTodo} save={this.editTodo} close={this.clearEditTodo} isOpen={true}/>:''}
       
        <AddTodoForm addTodo = {this.addTodo}/>
        <TodoList
          todos={this.state.todos}
          remove={this.removeTodo}
          removeall = {this.removeAll}
          edit={this.editTodo}
          setEdited={this.setEditedTodo}
          setDone={this.setDone}
          />
      </div>
    );
  }
}
export default App;
