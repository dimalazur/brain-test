import { combineReducers } from 'redux';

import {
  TODO_ADD,
  TODO_EDIT,
  TODO_EDIT_SHOW_FORM,
  TODO_EDIT_HIDE_FORM,
  TODO_DELETE,
  TODO_TOGGLE_COMPLETED,
  TODO_EDITABLE_SAVE,
  TODO_EDITABLE_CHANGE,
  TODO_FILTER

} from '../actions/actions';


const initialState = {
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


function todos (state = initialState, action)  {
  switch (action.type) {  

    case TODO_ADD: {
      return {
        ...state,
        todosList: [...state.todosList, action.payload]
      }
    }
    case TODO_EDIT: {
      return {
        ...state,
      }
    }
    case TODO_EDIT_SHOW_FORM: {
      return {
        ...state,
        selectedTodo: action.payload
      }
    }
    case TODO_EDIT_HIDE_FORM: {
      return {
        ...state,
        selectedTodo: null
      }
    }
    case TODO_EDITABLE_SAVE: {
      return {
        ...state,
        todosList: state.todosList.map( item => {
          if(state.selectedTodo.id === item.id){
            item.value = action.payload
          }
          return item;
        }),
        selectedTodo: null
      }
    }
    case TODO_EDITABLE_CHANGE: {
      return {
        ...state,
        selectedTodo: {
          id: state.selectedTodo.id,
          value: action.payload
        }
      }
    }
    case TODO_DELETE: {
      return {
        ...state,
        todosList: state.todosList.filter(todo => todo.id !== action.payload),
      }
    }
    case TODO_TOGGLE_COMPLETED: {
      return {
        ...state,
        todosList: state.todosList.map( (item) => {
          if ( item.id === action.payload ){
            item.completed = !item.completed;
            return item
          }
          return item
        })
        
      }
    }
    case TODO_FILTER: {
      return {
        ...state,
        filterTerm: action.payload,
      }
    }
    default: {
      return state;
    }
  }
};

const todosReducers = combineReducers({
  todos,
})

export default todosReducers;