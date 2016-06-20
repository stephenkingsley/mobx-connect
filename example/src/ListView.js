import 'babel-polyfill';
import React, { Component } from 'react';
import { connect } from '../../lib';

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
