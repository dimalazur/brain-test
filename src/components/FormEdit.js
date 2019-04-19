import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';
import PropTypes from 'prop-types';

const FormEdit = ({todoEditableSaveHeandler, todoValue, linkRef, todoEditableChangeHeandler, onTodoEditHideForm}) => {
  return (
    <React.Fragment>
      <form action="/" className="form form-edit" onSubmit={ () => todoEditableSaveHeandler(linkRef)} >
        <div className="form-row">
          <div className="col">
            <input 
            type="text" 
            className="form-control" 
            value={todoValue} 
            ref={linkRef}
            onChange={() => todoEditableChangeHeandler() } 
            />
          </div>
          <div className="col-auto item-btn-holder">
            <Button 
            className="btn btn-success" 
            onClick={ () => todoEditableSaveHeandler()} 
            >
              {<FontAwesomeIcon icon={faSave} />}
            </Button>
            <Button 
            className="btn btn-info" 
            onClick={ () => onTodoEditHideForm()}
            >
              {<FontAwesomeIcon icon={faTimes} />}
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

FormEdit.propTypes = {
  todoEditableSaveHeandler: PropTypes.func.isRequired,
  todoValue: PropTypes.string.isRequired,
  linkRef: PropTypes.object.isRequired,
  todoEditableChangeHeandler: PropTypes.func.isRequired,
  onTodoEditHideForm: PropTypes.func.isRequired,
};

export default FormEdit;