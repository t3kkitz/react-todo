import React from 'react';
import TodoItem from './TodoItem'

export function TodoList(props) {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
      </ul>
    </div>
  );
}