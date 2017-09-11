import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={props.isComplete}/>{props.name}
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