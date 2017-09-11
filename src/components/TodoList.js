import React from 'react';

function TodoList(props) {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;