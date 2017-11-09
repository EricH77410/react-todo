import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

import { addTodo } from '../actions/index';

import { Row, Input, Collapsible, CollapsibleItem, Button, Col } from 'react-materialize';

class AddTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo:'',
      status: 'n',
      deadLine:moment(),
      calendarFocused: false,
      error: ''
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

  dateChange = (deadLine) => {
    this.setState(()=>({deadLine}))
  }
  focusChange=({focused})=>{
    this.setState(()=>({calendarFocused: focused}));
  }

  submitTodo(e){
    e.preventDefault();
    const todo = {
      text:this.state.todo,
      status:this.state.status,
      deadLine: this.state.deadLine.valueOf()
    }
    if (todo.text){
      this.props.dispatch(addTodo(todo));
      this.props.saveAll();
      this.setState(()=>({todo:'',status:'n',error:'',deadLine:moment()}))
    } else {
      this.setState(()=>({error:'Le todo ne peut pas être vide ...'}))
    }

  }

  render(){
    return(
      <div className="container">
      <Collapsible popout onClick={
        (e)=>{
          console.log(e.target.className)
          if (e.target.className.includes('active')){
            console.log(this.refs)
          }
        }
        }>
        <CollapsibleItem header='Add todo' icon='add'>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.submitTodo} className="add-todo">
            <Row>
              <Input
                placeholder="Enter a task"
                s={6} label="Todo"
                onChange={this.handleChange}
                value={this.state.todo}
                ref="todoInput"
                autoFocus
                />
              <Col s={4}>
                <Input onClick={this.handleRadio} name="status" type='radio' label='Normal' checked={this.state.status==='n'} id="n"/>
                <Input onClick={this.handleRadio} name="status" type='radio' label='Urgent' checked={this.state.status==='u'} id="u"/>
                <Input onClick={this.handleRadio} name="status" type='radio' label='Faible' checked={this.state.status==='f'} id="f"/>
              </Col>

            </Row>

            <Row>
              <Col s={3}>
              <label>Dead Line</label>
              <SingleDatePicker
                  date={this.state.deadLine}
                  onDateChange={this.dateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.focusChange}
                  numberOfMonths={1}
                />
              </Col>
              <Button
              type="submit"
              floating
              large
              className='red'
              waves='light' icon='add' />
            </Row>
          </form>
        </CollapsibleItem>
      </Collapsible>
      </div>

    );
  }
}

export default connect()(AddTodoForm);
