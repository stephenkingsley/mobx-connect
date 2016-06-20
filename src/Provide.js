import React, { Component } from 'react';

export default class Provide extends Component {
  getChildContext() {
    return { store: this.props.store }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Provide.childContextTypes = {
  store: React.PropTypes.object
};
