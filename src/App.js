import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './components/todo';

class App extends Component {

  state = {
    todos:       [
      {id: 1, name: 'Learn JSX', isComplete: true},
      {id: 2, name: 'Build an awesome app', isComplete: false},
      {id: 3, name: 'Ship It!', isComplete: false},
    ],
    currentTodo: ''
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">

          <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo}/>

          <TodoList todos={this.state.todos}/>

        </div>
      </div>
    );
  }

  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    })
  }

}

export default App;
