import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  TodoForm,
  TodoList,
  Footer
} from './components/todo';
import {
  addTodo,
  generateId,
  findById,
  toggleTodo,
  updateTodo,
  removeTodo
} from './lib/todoHelpers'

class App extends Component {

  state = {
    todos:       [
      {
        id:         1,
        name:       'Learn JSX',
        isComplete: true
      },
      {
        id:         2,
        name:       'Build an awesome app',
        isComplete: false
      },
      {
        id:         3,
        name:       'Ship It!',
        isComplete: false
      },
    ],
    currentTodo: ''
  }

  render() {
    const handleSubmit = this.state.currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit;

    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>React Todos</h2>
        </div>

        <div className="Todo-App">

          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}

          <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo}
                    handleSubmit={handleSubmit}/>

          <TodoList handleToggle={this.handleToggle} handleRemove={this.handleRemove} todos={this.state.todos}/>

          <Footer/>

        </div>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {todos, currentTodo} = this.state;

    const newTodo = {
      id:         generateId(),
      name:       currentTodo,
      isComplete: false
    };

    this.setState({
      todos:        addTodo(todos, newTodo),
      currentTodo:  '',
      errorMessage: '',
    })
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({errorMessage: 'Please supply a todo name'})
  }

  handleInputChange = (e) => this.setState({currentTodo: e.target.value})

  handleToggle = (id) => {
    const todo         = findById(id, this.state.todos);
    const toggled      = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggled);
    this.setState({todos: updatedTodos})
  }

  handleRemove = (id) => {
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({todos: updatedTodos})
  }

}

export default App;
