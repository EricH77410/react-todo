import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions'
//import { setTextFilter } from '../actions/filter';
import selectTodos from '../selector/getVisibleTodos';

import { Table } from 'react-materialize';

import Todo from '../components/Todo2';

class TodoList extends Component {
    remove(t){
        this.props.dispatch(removeTodo(t))
      }
    getItems = () => {
        const items = this.props.todos
      
            return items.map((it)=>{
              return (<Todo
                item={it}
                key={it.id}
                remove={this.remove.bind(this)}
                setEdited={this.props.setEdited}
                edit={this.props.edit}
                setDone={this.props.setDone}
              />)
            })
    }
    render() { 
        return ( 
            <div>
                <Table
                hoverable={true}
                responsive={true}
                bordered={true}
                >
                    <thead>
                        <tr>
                            <th>Todo</th>
                            <th>Actions</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getItems()}
                    </tbody>
                </Table>
            </div>
         )
    }
}

const mapStateToProps = (state) => {
    return {
      todos:selectTodos(state.todos,state.filter),
      filter: state.filter
    }
  }
 
export default connect(mapStateToProps)(TodoList);