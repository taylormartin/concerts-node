import React from 'react';
import Reflux from 'reflux';
import {concertStore} from './stores/show_store';
import {concertActions} from './actions/show_actions';
import {citysJSON} from './responses/citys';
import {showsJSON} from './responses/shows';
import './styles/styles';
import './styles/menu';

export var Filter = React.createClass({

  mixins: [
    Reflux.connect(concertStore)
  ],

  handleChange(event) {
    this.setState({selectedCity: event.target.value});
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
    concertActions.filterShows(criteria);
  },

  resetShows() {
    concertActions.resetShows();
  },

  render() {
    var city = this.state.selectedCity;
    var criteria = this.state.criteria;

    return (
      <div className="row"> 
        <div className="col-lg-12 search-filter-bar">
          <span className="change-input">
           <label>City Search:</label>
           <input name="search-bar" type="text" onChange={this.handleChange} value={city}></input>
           <button onClick={this.handleClick}>Search</button>
          </span>
          <span className="change-input">
            <label>Filter Shows:</label>
            <input name="filter" type="text" onChange={this.handleCriteriaChange} value={criteria}></input>
            <button onClick={this.filterShows}>Filter</button>
          </span>
          <span className="change-input">
           <button onClick={this.resetShows}>Reset</button>
          </span>
        </div>
      </div>
    );
  }

});

