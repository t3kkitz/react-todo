import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
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
  removeTodo,
  filterTodos
} from './lib/todoHelpers'
import {
  loadTodos,
  createTodo
} from './lib/todoService';

class App extends Component {

  state = {
    todos:       [],
    currentTodo: ''
  }

  static contextTypes = {
    route: PropTypes.string,
  }

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}))
  }

  render() {
    const handleSubmit = this.state.currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit;

    const displayTodos = filterTodos(this.state.todos, this.context.route)

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

          <TodoList handleToggle={this.handleToggle} handleRemove={this.handleRemove} todos={displayTodos}/>

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
    createTodo(newTodo)
      .then(() => console.log('Todo added'))
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
