import React from 'react';
import Reflux from 'reflux';
import {concertStore} from './store';
import {concertActions} from './actions';
import './styles';

var App = React.createClass({

  mixins: [
    Reflux.connect(concertStore)
  ],

  getInitialState: function() {
    return {
      cityValue: "i.e. Atlanta",
    };
  },

  handleChange: function(event) {
    this.setState({cityValue: event.target.value});
  },

  handleClick: function() {
    var cityValue = this.state.cityValue;
    concertActions.citySearch();
  },

  render: function() {
    
    var cityValue = this.state.cityValue;

    return (
      <div className="commentBox">
        <label>City Search:</label>
        <input name="search-bar" type="text" onChange={this.handleChange} value={cityValue}></input>
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }


});

React.render(<App/>, document.querySelector('#main'));
