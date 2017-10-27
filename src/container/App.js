import React, { Component } from 'react';

// Components
import AddTodoForm from '../components/AddTodoForm';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos:null
    };
  }
  render() {
    return (
      <div className="App">
        <AddTodoForm />
      </div>
    );
  }
}

export default App;
