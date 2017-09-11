import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';

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

          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo => (
                <li key={todo.id}>
                  <label>
                    <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>

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
