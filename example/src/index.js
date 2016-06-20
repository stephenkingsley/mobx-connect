import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './store/list';
import Todo from './actions/AddList';
import ListView from './ListView';
import { Provide } from '../../lib';

let i = 3;
const store = new List();
store.todos.push(
    new Todo('1'),
    new Todo("2")
);

const add = () => {
  store.todos.push(
      new Todo(i)
  );
  i++;
}

const App = () => {
  return (
    <Provide store={store.todos}>
      <button onClick={() => add()}>click me</button>
      this is cunter
      <ListView />
    </Provide>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
