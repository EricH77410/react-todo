import React from 'react';

import Modal from 'react-modal';
import { Button } from 'react-materialize';

export default class EditTodo extends React.Component{
    render(){
        return (
               <Modal 
               isOpen={this.props.isOpen}
               onRequestClose={this.props.close}
               >
                 <h4>{this.props.todo.text}</h4>
                 <Button waves='light' onClick={this.props.close}>Save</Button>
               </Modal>
        )
    }
}
