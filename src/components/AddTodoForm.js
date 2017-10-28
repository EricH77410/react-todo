import React, { Component } from 'react';

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
    this.setState({status:e.target.id})
  }

  submitTodo(e){
    e.preventDefault();
    const todo = {
      txt: this.state.todo,
      status: this.state.status
    }
    this.props.addTodo(todo)
    this.setState({todo:'',status:'n'})
  }

  render(){
    return(
      <form onSubmit={this.submitTodo}>
        <Row>
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

export default AddTodoForm;
