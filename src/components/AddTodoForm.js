import React, { Component } from 'react';

import { Button, Icon, Row, Input } from 'react-materialize';

class AddTodoForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      todo:null
    };
  }
  render(){
    return(
      <Row>
        <Input placeholder="Enter a task" s={6} label="Todo"/>
      </Row>
    );
  }
}

export default AddTodoForm;
