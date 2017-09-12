import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const handleToggle = props.handleToggle.bind(null, props.id);
  return (
    <li>
      <label>
        <input type="checkbox" checked={props.isComplete}
               onChange={handleToggle}/>{props.name}
      </label>
    </li>
  );
}

TodoItem.propTypes = {
  id:         PropTypes.number.isRequired,
  name:       PropTypes.string.isRequired,
  isComplete: PropTypes.bool
};

export default TodoItem;