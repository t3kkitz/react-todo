import React from 'react';
import PropTypes from 'prop-types'

export function TodoForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.currentTodo} onChange={props.handleInputChange}/>
    </form>
  );
};

TodoForm.propTypes = {
  currentTodo:       PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}