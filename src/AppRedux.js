import React, { Component } from 'react';
import TodoWrap from './containers/TodoWrap';
import './App.css';

class AppRedux extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="main-title">My TODO App</h1>
        </header>
        <TodoWrap/>
      </div>
    );
  }
}

export default AppRedux;

