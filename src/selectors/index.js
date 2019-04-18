import { createSelector } from 'reselect'

const getList = state => state.todos.todosList;
const getFilterTerm = state => state.todos.filterTerm;

export const getNotesListRender = createSelector(
  [getList, getFilterTerm],
  (todosList, filterTerm) => {
    if (filterTerm){
      return todosList.filter( (todo) => {
        if(filterTerm === 'Completed'){
          return todo[filterTerm.toLowerCase()];
        }
        if(filterTerm === 'Active'){
          return (!todo.completed) ? true : false;
        }
        if(filterTerm === 'All'){
          return true;
        }
        return false
      })
    }
    return todosList;
  }
);