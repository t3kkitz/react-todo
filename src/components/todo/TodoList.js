import React from 'react';
import TodoListItem from './TodoListItem'

export function TodoList(props) {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
      </ul>
    </div>
  );
}