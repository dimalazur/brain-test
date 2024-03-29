import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import PropTypes from 'prop-types';

const ItemDescription = ({todoItemValue, todoCompleted, deleteTodo, todoEdit, onChangeToggleCompleted}) => {
  return (
    <React.Fragment>
      <div className="item-description">
        <label className="checkbox">
          <input type="checkbox" 
            checked={ todoCompleted }
            onChange={() => onChangeToggleCompleted()} 
          />
          <span className="todo-text">{todoItemValue}</span>
        </label>
      </div>
      <div className="item-btn-holder">
        <Button 
          className="btn btn-secondary" 
          onClick={() => todoEdit()} 
        >
          {<FontAwesomeIcon icon={faEdit} />}
        </Button>
        <Button 
          className="btn btn-danger" 
          onClick={() => deleteTodo()} 
        >  
          {<FontAwesomeIcon icon={faTrash} />}
        </Button>
      </div>
    </React.Fragment>
  );
}

ItemDescription.propTypes = {
  todoItemValue: PropTypes.string.isRequired,
  todoCompleted: PropTypes.bool.isRequired,
  todoEdit: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  onChangeToggleCompleted: PropTypes.func.isRequired,
};

export default ItemDescription;