import React, { Component } from 'react';
import TodoWrapContext from './containers/TodoWrapContext';
import {TodoContext} from './context/todo-context';
import {getNotesListRender} from './selectors/';
import uuid from 'uuid';
import './App.css';

class AppContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {
        todosList: [
          {
            value: 'Lorem ipsum dolor sit amet 1',
            id:'434d0-5c56-11e9-8dfe-a332a70fd860',
            completed: false
          },
          {
            value: 'Lorem ipsum dolor sit amet 2',
            id:'434d0-5c56-11e9-8dfdsfe-a332a70fd860',
            completed: false
          },
          {
            value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae tempore iusto quidem vitae consectetur sed voluptatibus. 3',
            id:'434d0-5c56-11e9-8dfe-a332a7045fd860',
            completed: false
          },
          {
            value: 'Lorem ipsum dolor sit amet 4',
            id:'434d0-5c56-11edgf9-8dfe-a33245a70fd860',
            completed: true
          },
        ],
        filterGroup: ['All', 'Active', 'Completed'],
        filterTerm: null,
        selectedTodo: null
      }

    };

    this.addTodoHeandler = this.addTodoHeandler.bind(this);
    this.deleteTodoHeandler = this.deleteTodoHeandler.bind(this);
    this.todoEditHeandler = this.todoEditHeandler.bind(this);
    this.todoEditableSaveHeandler = this.todoEditableSaveHeandler.bind(this);
    this.todoEditableChangeHeandler = this.todoEditableChangeHeandler.bind(this);
    this.onTodoEditHideForm = this.onTodoEditHideForm.bind(this);
    this.onTodoToggleCompleted = this.onTodoToggleCompleted.bind(this);
    this.onTodoFilter = this.onTodoFilter.bind(this);

  }

  addTodoHeandler(event, linkRef) {
    event.preventDefault();
    let todoInputRef = linkRef.current.value.trim();
    if ( todoInputRef ){
      this.setState({
        todos:{
          ...this.state.todos,
          todosList: [...this.state.todos.todosList, {
          id: uuid(),
          value: todoInputRef,
          completed: false
        }]
        }
      });

      linkRef.current.value = '';
    }
  }

  deleteTodoHeandler(id){
    this.setState({
      todos:{
        ...this.state.todos,
        todosList: this.state.todos.todosList.filter(todo => todo.id !== id)
      }
    });
  }

  todoEditHeandler(id,value){
    this.setState({
      todos:{
        ...this.state.todos,
        selectedTodo: {id,value}
      }
    });
  }

  todoEditableSaveHeandler(todoInputEditRef){
    let value = todoInputEditRef.current.value.trim();
    this.setState({
      todos:{
        ...this.state.todos,
        todosList: this.state.todos.todosList.map( item => {
          if(this.state.todos.selectedTodo.id === item.id){
            item.value = value
          }
          return item;
        }),
        selectedTodo: null
      }
    });
  }

  todoEditableChangeHeandler(todoInputEditRef){
    let value = todoInputEditRef.current.value.trim();
    this.setState({
      todos:{
        ...this.state.todos,
        selectedTodo: {...this.state.todos.selectedTodo, value}
      }
    });
  }

  onTodoEditHideForm(){
    this.setState({
      todos:{
        ...this.state.todos,
        selectedTodo: null
      }
    });
  }

  onTodoToggleCompleted(id){
    this.setState({
      todos:{
        ...this.state.todos,
        todosList: this.state.todos.todosList.map( (item) => {
          if ( item.id === id ){
            item.completed = !item.completed;
            return item
          }
          return item
        })
      }
    });
  }

  onTodoFilter(filterTerm){
    this.setState({
      todos:{
        ...this.state.todos,
        filterTerm
      }
    });
  }

  render() {
    const renderList = getNotesListRender(this.state);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="main-title">My TODO App</h1>
        </header>
          <TodoContext.Provider value={
            {
              todos:{
                renderList,
                filterGroup: this.state.todos.filterGroup,
                filterTerm: this.state.todos.filterTerm,
                selectedTodo: this.state.todos.selectedTodo,
                addTodoHeandler: this.addTodoHeandler,
                deleteTodoHeandler: this.deleteTodoHeandler,
                todoEditHeandler: this.todoEditHeandler,
                todoEditableSaveHeandler: this.todoEditableSaveHeandler,
                todoEditableChangeHeandler: this.todoEditableChangeHeandler,
                onTodoEditHideForm: this.onTodoEditHideForm,
                onTodoToggleCompleted: this.onTodoToggleCompleted,
                onTodoFilter: this.onTodoFilter
              }
            }
          }>
            <TodoWrapContext />
          </TodoContext.Provider> 
      </div>
    );
  }
}

export default AppContext;