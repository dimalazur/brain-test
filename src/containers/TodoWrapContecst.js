import React, { Component } from 'react';
import classNames from 'classnames';
import FormEdit from '../components/FormEdit';
import ItemDescription from '../components/ItemDescription';
import FormAdd from '../components/FormAdd'
import {TodoContext} from '../context/todo-context';

class TodoWrapContecst extends Component {
  constructor(props) {
    super(props);
    this.todoInputRef = React.createRef();
    this.todoInputEditRef = React.createRef();
  }

  render() {

    const {selectedTodo} = this.context.todos;
    const selectedTodoId = (selectedTodo) ? selectedTodo.id : null;

    return (
      <React.Fragment> 
        <TodoContext.Consumer> 

        { ({
            todos:{
              renderList,
              filterGroup,
              filterTerm, 
              addTodoHeandler, 
              deleteTodoHeandler, 
              todoEditHeandler, 
              todoEditableSaveHeandler,
              todoEditableChangeHeandler,
              onTodoEditHideForm,
              onTodoToggleCompleted,
              onTodoFilter
            }
          }) => (
       
            <div className="jumbotron">
              <div className="container">
                <FormAdd 
                  addTodoHeandler = { (event) => addTodoHeandler(event, this.todoInputRef) }
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
                              todoEdit={() => todoEditHeandler(todo.id, todo.value)} 
                              deleteTodo={() => deleteTodoHeandler(todo.id)} 
                            />
                         :
                          <FormEdit 
                            todoEditableSaveHeandler = { () => todoEditableSaveHeandler(this.todoInputEditRef) }
                            todoValue = {selectedTodo.value} 
                            linkRef = {this.todoInputEditRef}
                            todoEditableChangeHeandler = {() => todoEditableChangeHeandler(this.todoInputEditRef)}
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
                  {filterGroup.map( (item, index)=> {
                    let cnGroupItem = classNames('list-group-item', {
                      'item-active': filterTerm === item
                    });
                    return <li className={cnGroupItem} key={index} onClick={ () => onTodoFilter(item) } >{item}</li>   
                  })}
                  </ul>
                </div>
              </div>
            </div>
         )}
        </TodoContext.Consumer> 
      </React.Fragment>
    );
  }
}

TodoWrapContecst.contextType = TodoContext;

export default TodoWrapContecst;