import React from 'react';
import Reflux from 'reflux';
import {concertStore} from './store';
import {concertActions} from './actions';
import {citysJSON} from './responses/citys';
import {showsJSON} from './responses/shows';
import './styles';

export var Filter = React.createClass({

  mixins: [
    Reflux.connect(concertStore, "shows")
  ],

  getInitialState() {
    return {
      cityValue: "i.e. Atlanta",
      criteria: "" 
    };
  },

  handleChange(event) {
    this.setState({cityValue: event.target.value});
  },

  handleClick() {
    var cityValue = this.state.cityValue;
    concertActions.citySearch(showsJSON);
  },

  handleCriteriaChange(event) {
    this.setState({criteria: event.target.value});
  },

  filterShows() {
    var criteria = this.state.criteria;
  },

  render() {
    var cityValue = this.state.cityValue;
    var criteria = this.state.criteria;

    return (
      <div> 
        <div>
         <label>City Search:</label>
         <input name="search-bar" type="text" onChange={this.handleChange} value={cityValue}></input>
         <button onClick={this.handleClick}>Search</button>
        </div>
        <div className="filter-bar">
          <label>Filter Shows:</label>
          <input name="filter" type="text" onChange={this.handleCriteriaChange} value={criteria}></input>
          <button onClick={this.filterShows}>Filter</button>
        </div>
      </div>
    );
  }

});

