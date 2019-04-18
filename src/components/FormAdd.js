import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';
import PropTypes from 'prop-types';

const FormAdd = ({addTodoHeandler,todoInputRefLink}) => {
  return (
    <form action="/" className="form form-todo" onSubmit={ (event, todoInputRefLink) => addTodoHeandler(event, todoInputRefLink) }>
      <div className="input-group mb-3">
        <input type="text" className="form-control" ref={todoInputRefLink} />
        <div className="input-group-append">
          <Button 
            className="btn btn-outline-secondary" 
            buttonChildren={<FontAwesomeIcon icon={faPlus} />} 
            onClick={(event) => addTodoHeandler(event)}
          />
        </div>
      </div>
    </form>
  );
}

FormAdd.propTypes = {
  addTodoHeandler: PropTypes.func.isRequired,
  todoInputRefLink: PropTypes.object.isRequired,
};

export default FormAdd;