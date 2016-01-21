import React from 'react';
import Reflux from 'reflux';
import {store} from './store';
import {actions} from './actions';
import './styles';

var App = React.createClass({

  mixins: [
    Reflux.connect(store)
  ],

  render() {
    return(
      <div>
        <h1>Homepage</h1>
      </div>
    );
  },

});

React.render(<App/>, document.querySelector('#main'));
