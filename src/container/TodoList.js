import React, { Component } from 'react';

import { Collapsible, CollapsibleItem } from 'react-materialize';

import Todo from '../components/Todo';

class TodoList extends Component {
  remove(t){
    this.props.remove(t)
  }
  render(){
    console.log(this.props)
    const getItems = this.props.todos.map((it)=>{
      return <Todo item={it} key={it.text} remove={this.remove.bind(this)}/>
    })
    return(
      <div>
        <Collapsible>
	        <CollapsibleItem header='First' icon='filter_drama'>
		        {getItems}
	        </CollapsibleItem>
	        <CollapsibleItem header='Second' icon='place'>
		         {getItems}
	        </CollapsibleItem>
	        <CollapsibleItem header='Third' icon='whatshot'>
		          {getItems}
	        </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}

export default TodoList;
