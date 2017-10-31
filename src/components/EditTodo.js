import React from 'react';

import Modal from 'react-modal';
import { Button, Input } from 'react-materialize';

const customStyle={
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                  : '40%'
      }
}

export default class EditTodo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text:this.props.todo.text,
            status: this.props.todo.status,
            done: this.props.todo.done
        }
        this.modifiedTodo   = this.modifiedTodo.bind(this)
        this.handleChange   = this.handleChange.bind(this)
        this.handleRadio    = this.handleRadio.bind(this)
        this.setDone        = this.setDone.bind(this)
    }

    handleChange(e){
        this.setState({text: e.target.value})
    }

    handleRadio(e){
        console.log(e.target.value)
        this.setState({status: e.target.value})
    }

    setDone(e){
        console.log(e.target.value)        
        this.setState({done: !this.state.done})
    }

    modifiedTodo(){
        const todo = {
            id: this.props.todo.id,
            text: this.state.text,
            status: this.state.status,
            done: this.state.done
        }
        this.props.save(todo);
    }
    render(){
        return (
               <Modal 
               isOpen={this.props.isOpen}
               onRequestClose={this.props.close}
               style={customStyle}
               >
               <form>
                    
                        <Input
                            placeholder="Enter a task"
                            s={12} label="Todo"
                            onChange={this.handleChange}
                            value={this.state.text}
                        />                    
                    
                        <div className="status-radio">
                            <Input onClick={this.handleRadio} name="status-edit" type='radio' label='Normal' checked={this.state.status==='n'} value="n"/>
                            <Input onClick={this.handleRadio} name="status-edit" type='radio' label='Urgent' checked={this.state.status==='u'} value="u"/>
                            <Input onClick={this.handleRadio} name="status-edit" type='radio' label='Faible' checked={this.state.status==='f'} value="f"/>
                        </div>
                        <div className="status-done">
                            <Input 
                                onClick={this.setDone} 
                                name='on' 
                                type='switch'                        
                                onLabel='Done'
                                offLabel='Pending'                                
                                value={this.state.done ? 'on':'off'}
                                defaultChecked={this.state.done}
                            />
                        </div>
                    <Button waves='light' onClick={this.modifiedTodo}>Save</Button>
               </form>
               
               </Modal>
        )
    }
}
