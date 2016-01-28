import React from 'react';
import Reflux from 'reflux';
import ReactDOM from 'react-dom';
import {concertStore} from './store';
import {concertActions} from './actions';
import {citysJSON} from './responses/citys';
import {showsJSON} from './responses/shows';
import './styles';

var App = React.createClass({

  mixins: [
    Reflux.connect(concertStore, "shows")
  ],

  getInitialState() {
    return {
      cityValue: "i.e. Atlanta",
      currentShows: {}
    };
  },

  onCitySearch() {
    debugger;
    this.setState({
      currentShows: {}
    });
  },

  handleChange(event) {
    this.setState({cityValue: event.target.value});
  },

  handleClick() {
    var cityValue = this.state.cityValue;
    concertActions.citySearch(showsJSON);
  },

  render() {
    debugger;
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

ReactDOM.render(<App/>, document.getElementById('main'));

