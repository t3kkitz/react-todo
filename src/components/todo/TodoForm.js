import React from 'react';

export function TodoForm(props) {
  return (
    <form>
      <input type="text" value={props.currentTodo} onChange={props.handleInputChange}/>
    </form>
  );
};