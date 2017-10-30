import React from 'react';

import Modal from 'react-modal';
import { Button, Row, Input } from 'react-materialize';

export default class EditTodo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text:this.props.todo.text,
            status: this.props.todo.status,
            done: this.props.todo.done
        }
        this.modifiedTodo = this.modifiedTodo.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({text: e.target.value})
    }
    modifiedTodo(){
        const todo = {
            id: this.props.todo.id,
            text: this.state.text,
            status: this.state.status,
            done: this.state.done
        }
        this.props.close(todo);
    }
    render(){
        return (
               <Modal 
               isOpen={this.props.isOpen}
               onRequestClose={this.modifiedTodo}
               >
               <Row>
                <Input
                placeholder="Enter a task"
                s={6} label="Todo"
                onChange={this.handleChange}
                value={this.state.text}
                />
                 <Button waves='light' onClick={this.modifiedTodo}>Save</Button>
               </Row>
            
               </Modal>
        )
    }
}
