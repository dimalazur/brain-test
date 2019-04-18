import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import classNames from 'classnames';
import FormEdit from '../components/FormEdit';
import ItemDescription from '../components/ItemDescription';
import FormAdd from '../components/FormAdd';
import PropTypes from 'prop-types';
import { 
      todoAdd,
      todoToggleCompleted,
      todoEditHideForm,
      todoDelete,
      todoEditShowForm,
      todoEditableSave,
      todoEditableChange,
      todoFilter
    } from '../actions/actions' 
import {getNotesListRender} from '../selectors/';

class TodoWrap extends Component {
  constructor(props) {
    super(props);

    this.todoInputRef = React.createRef();
    this.todoInputEditRef = React.createRef();
    this.addTodoHeandler = this.addTodoHeandler.bind(this);
    this.deleteTodoHeandler = this.deleteTodoHeandler.bind(this);
    this.todoEditableSaveHeandler = this.todoEditableSaveHeandler.bind(this);
    this.todoEditHeandler = this.todoEditHeandler.bind(this);
    this.todoEditableChangeHeandler = this.todoEditableChangeHeandler.bind(this);
  }

  addTodoHeandler(event) {
    event.preventDefault();
    const { onTodoAdd } = this.props;
    let todoInputRef = this.todoInputRef.current.value.trim();

    if ( todoInputRef ){
      onTodoAdd( {
        id: uuid(),
        value: todoInputRef,
        completed: false
      } );
      this.todoInputRef.current.value = '';
    }
  }

  deleteTodoHeandler(id){
    const {onTodoDelete} = this.props;
    onTodoDelete(id);
  }

  todoEditableSaveHeandler(){
    const {onTodoEditableSave} = this.props;
    let value = this.todoInputEditRef.current.value.trim();
    if(value){
      onTodoEditableSave(value);
    }
  }

  todoEditHeandler(id,value){
    const {onTodoEditShowForm} = this.props;
    onTodoEditShowForm({id,value});
  }

  todoEditableChangeHeandler(){
    const {onTodoEditableChange} = this.props;
    let value = this.todoInputEditRef.current.value.trim();
    onTodoEditableChange(value);
  }

  render() {
    const { 
        selectedTodo,
        onTodoEditHideForm,
        onTodoToggleCompleted,
        onTodoFilter,
        renderList,

      } = this.props;

    const selectedTodoId = (selectedTodo) ? selectedTodo.id : null;

    return (
      <React.Fragment> 
        <div className="jumbotron">
          <div className="container">
            <FormAdd 
              addTodoHeandler = { (event) => this.addTodoHeandler(event) }
              todoInputRefLink = { this.todoInputRef }
            />
            
            <div className="list-todo-holder">
              <ul className="list-group">
                {renderList.map( todo => {
                  let cnTodoItem = classNames('list-group-item', {
                    'item-completed': todo.completed,
                    'item-editable': todo.id === selectedTodoId,
                  });
                  return ( 
                    <li className={cnTodoItem} key={todo.id}>
                      { ( selectedTodoId !== todo.id) ? 
                        <ItemDescription 
                          todoItemValue = {todo.value}
                          todoCompleted={ todo.completed }
                          onChangeToggleCompleted={() => onTodoToggleCompleted(todo.id)} 
                          todoEdit={() => this.todoEditHeandler(todo.id, todo.value)} 
                          deleteTodo={() => this.deleteTodoHeandler(todo.id)} 
                        />
                      :
                        <FormEdit 
                          todoEditableSaveHeandler = {this.todoEditableSaveHeandler}
                          todoValue = {selectedTodo.value} 
                          linkRef = {this.todoInputEditRef}
                          todoEditableChangeHeandler = {this.todoEditableChangeHeandler}
                          onTodoEditHideForm = {onTodoEditHideForm}
                        />
                      }
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="filter-holder">
              <ul className="list-group">
                <li className="list-group-item" onClick={ ()=> onTodoFilter('All')} >All</li>
                <li className="list-group-item"  onClick={ ()=> onTodoFilter('Active')} >Active</li>
                <li className="list-group-item"  onClick={ ()=> onTodoFilter('Completed')} >Completed</li>
              </ul>
            </div>
              
            
          </div>
        </div>
    
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTodo: state.todos.selectedTodo,
    renderList: getNotesListRender(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoAdd: (payload) => {
      dispatch(todoAdd(payload))
    },
    onTodoToggleCompleted: (payload) => {
      dispatch(todoToggleCompleted(payload))
    },
    onTodoDelete: (payload) => {
      dispatch(todoDelete(payload))
    },
    onTodoEditShowForm: (payload) => {
      dispatch(todoEditShowForm(payload))
    },
    onTodoEditHideForm: (payload) => {
      dispatch(todoEditHideForm(payload))
    },
    onTodoEditableSave: (payload) => {
      dispatch(todoEditableSave(payload))
    },
    onTodoEditableChange: (payload) => {
      dispatch(todoEditableChange(payload))
    },
    onTodoFilter: (payload) => {
      dispatch(todoFilter(payload))
    }
  }
}

const TodoWrapConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoWrap);

TodoWrap.propTypes = {
  selectedTodo: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.string,
      id: PropTypes.string
    }),
    PropTypes.object,
  ]),
  renderList: PropTypes.arrayOf( PropTypes.shape({
      completed: PropTypes.bool,
      value: PropTypes.string,
      id: PropTypes.string
  }))
};

export default TodoWrapConnect;

