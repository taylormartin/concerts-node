import React from 'react';
import Reflux from 'reflux';
import {concertStore} from './stores/show_store';
import {concertActions} from './actions/show_actions';
import {citysJSON} from './responses/citys';
import {showsJSON} from './responses/shows';
import {menuActions} from './actions/menu_actions';
import './styles/styles';
import './styles/menu';

export var Filter = React.createClass({

  mixins: [
    Reflux.connect(concertStore)
  ],

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

  openLeftMenu() {
    menuActions.openLeftMenu();
  },

  render() {
    var city = this.state.selectedCity;
    var criteria = this.state.criteria;

    return (
      <div className="row search-filter-bar"> 
        <span className="venue-filter-btn glyphicon glyphicon-menu-hamburger" onClick={this.openLeftMenu}></span> 
        <div className="search-filter-reset">
          <span className="change-input">
           <span>Current City:</span>
           <span className="search-input" value={city}></span>
           <button className="search-btn" data-toggle="modal" data-target="#myModal">Change City</button>
          </span>
          <span className="change-input">
            <label>Filter Shows:</label>
            <input className="filter-input" name="filter" type="text" onChange={this.handleCriteriaChange} value={criteria}></input>
            <button className="filter-btn" onClick={this.filterShows}>Filter</button>
          </span>
          <span className="change-input">
            <button onClick={this.resetShows}>Reset</button>
          </span>
        </div>
      </div>
    );
  }

});

