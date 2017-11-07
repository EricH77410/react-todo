import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addTodo } from '../actions/index';

import { Row, Input } from 'react-materialize';

class AddTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo:'',
      status: 'n'
    };
    this.handleChange = this.handleChange.bind(this)
    this.submitTodo = this.submitTodo.bind(this)
    this.handleRadio = this.handleRadio.bind(this)
  }

  handleChange(e) {
    this.setState({todo: e.target.value})
  }

  handleRadio(e) {
    const status = e.target.id
    this.setState({status})
  }

  submitTodo(e){
     e.preventDefault();
    const todo = {
      text:this.state.todo,
      status:this.state.status
    }
    console.log({todo})
    this.props.dispatch(addTodo(todo));
    this.setState(()=>({todo:'',status:'n'}))
  }

  render(){
    return(
      <form onSubmit={this.submitTodo} className="add-todo">
        <Row>
          <h5 className="form-title">Add a todo</h5>
          <Input
            placeholder="Enter a task"
            s={6} label="Todo"
            onChange={this.handleChange}
            value={this.state.todo}
            />
          <Input onClick={this.handleRadio} name="status" type='radio' label='Normal' checked={this.state.status==='n'} id="n"/>
          <Input onClick={this.handleRadio} name="status" type='radio' label='Urgent' checked={this.state.status==='u'} id="u"/>
          <Input onClick={this.handleRadio} name="status" type='radio' label='Faible' checked={this.state.status==='f'} id="f"/>
        </Row>
      </form>

    );
  }
}

export default connect()(AddTodoForm);
