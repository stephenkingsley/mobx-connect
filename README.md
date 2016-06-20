# mobx-connect

Not official React bindings for mobX, but performant and flexible.

## Installation

React mobX requires React 0.14 or later

    npm i mobx--awesome-connect --save

This assumes that you’re using npm package manager with a module bundler like Webpack to consume CommonJS modules.

## Use

### In the root component

```javascript

import { Provide } from 'mobx--awesome-connect';

const add = () => {
  store.todos.push(
      new Todo('awesome-connect')
  );
}

const App = () => {
  return (
    <Provide store={store.todos}>
      <button onClick={() => add()}>click me</button>
      this is Counter
      <ListView />
    </Provide>
  )
}

```

### In the children component

```javascript

import React, { Component } from 'react';
import { connect } from 'mobx--awesome-connect';

const ListView = (props, context) => {
  return (
    <div>
      {
        props.store.map( (ele, index) => <div key={index}>{ele.title}</div>)
      }
    </div>
  )
}

module.exports = connect()(ListView);

```

## Example

    git clone 
    npm i
    npm run build
    cd example 
    npm start
    

## Documentation

 - [mobX: have to width mobX]('http://mobxjs.github.io/mobx/')

 - API
  + < Provide >

    * has only `@parma`, store

  + connect()

    * `@parma` now is null

## Next

|version| function|
|:------|--------:|
|V1.1.1|provide parma in connect function. user can listen data what they need|
|V1.2.1|provide second parma in connect function. user can mapActionsToProps|
