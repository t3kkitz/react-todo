import React from 'react';

function TodoListItem({todo}) {
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
      </label>
    </li>
  );
}

export default TodoListItem;