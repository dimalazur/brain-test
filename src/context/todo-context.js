import React from 'react';
const store = {
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
  filterTerm: null,
  selectedTodo: null,

}

export const TodoContext = React.createContext({
  store
});