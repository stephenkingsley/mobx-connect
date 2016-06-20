import React, { Component } from 'react';
import { observer } from 'mobx-react';

const connent = str => RootComponent => {
  RootComponent = observer(RootComponent)
  class Connect extends Component {

    render() {
      return <RootComponent store={this.context.store} />
    }
  }

  Connect.contextTypes = {
    store: React.PropTypes.object
  };

  return Connect
}

module.exports = connent;
