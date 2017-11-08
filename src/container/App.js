import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadTodos, saveAll, removeAll } from '../actions';

// Components
import Header from '../layout/Header';
import AddTodoForm from '../components/AddTodoForm';
//import TodoList from './TodoList';
import TodosList2 from './TodosList2'
import EditTodo from '../components/EditTodo';
import TodosFilter from '../components/TodosFilter';

// Style
import './App.css'

// TODO: Ajouter un reducerFilter pour filtrer le todos done ou pas

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      editedTodo: null
    }
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
      this.props.dispatch(loadTodos());
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
    this.props.dispatch(removeAll());
    this.props.dispatch(saveAll());
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
    console.log('edit');
    this.setState({editedTodo: todo});
  }

  clearEditTodo(){
    this.setState({editedTodo: null})
  }

  saveData(){
    this.props.dispatch(saveAll())
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
        {this.state.editedTodo && <EditTodo 
        todo={this.state.editedTodo} 
        isOpen={this.state.editedTodo ? true:false}
        close={this.clearEditTodo}
        />}
        <Header />
        <AddTodoForm />
        <TodosFilter />
        <TodosList2
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

export default connect()(App);
