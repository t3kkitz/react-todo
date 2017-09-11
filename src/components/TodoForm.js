import React from 'react';

function TodoForm(props) {
  return (
    <form>
      <input type="text" value={props.currentTodo} onChange={props.handleInputChange}/>
    </form>
  );
}

export default TodoForm;