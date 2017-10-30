import React, { Component } from 'react';

import { Collapsible, CollapsibleItem } from 'react-materialize';

import Todo from '../components/Todo';

class TodoList extends Component {
  remove(t){
    this.props.remove(t)
  }

  getItems(filter){
    const items = this.props.todos.filter((it)=>{
      return it.status === filter;
      })

      return items.map((it)=>{
        return (<Todo
          item={it}
          key={it.text}
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

export default TodoList;
