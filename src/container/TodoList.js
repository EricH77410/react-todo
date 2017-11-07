import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions'
import { setTextFilter } from '../actions/filter';
import selectTodos from '../selector/getVisibleTodos';

import { Collapsible, CollapsibleItem } from 'react-materialize';

import Todo from '../components/Todo';

class TodoList extends Component {

  remove(t){
    this.props.dispatch(removeTodo(t))
  }

  textChange = (e) => {
    const txt = e.target.value;
    this.props.dispatch(setTextFilter(txt));
  }

  getItems(filter){
    const items = this.props.todos.filter((it)=>{
      return it.status === filter;
    })

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

  render(){

    return(
      <div>
        <button onClick={this.props.removeall}>Remove all</button>
        <Collapsible>
	        <CollapsibleItem header='Urgent' icon='filter_drama' className="todos-urgent">
		        {this.getItems('u')}
	        </CollapsibleItem>
	        <CollapsibleItem header='Normal' icon='place' className="todos-normal">
		         {this.getItems('n')}
	        </CollapsibleItem>
	        <CollapsibleItem header='Faible' icon='whatshot' className="todos-faible">
		          {this.getItems('f')}
	        </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos:selectTodos(state.todos,state.filter),
    filter: state.filter
  }
}

export default connect(mapStateToProps)(TodoList);
