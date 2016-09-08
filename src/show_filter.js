import React from 'react';
import Reflux from 'reflux';
import {concertStore} from './stores/show_store';
import {concertActions} from './actions/show_actions';
import {menuActions} from './actions/menu_actions';
import './styles/styles';
import './styles/menu';

export var ShowFilter = React.createClass({

  mixins: [
    Reflux.connect(concertStore, "showStatus")
  ],

	getInitialState() {
		return {searchTerm: ""};
	},

  handleCriteriaChange(event) {
		this.setState({searchTerm: event.target.value});
  },

  filterShows() {
    var criteria = this.state.searchTerm;
    concertActions.filterShows(criteria);
  },

  resetShows() {
    concertActions.resetShows();
  },

  openLeftMenu() {
    menuActions.openLeftMenu();
  },

  render() {
    var city = this.state.showStatus.selectedCity.text;
    var searchTerm = this.state.searchTerm;

    return (
      <div className="row search-filter-bar">
        <span className="venue-filter-btn glyphicon glyphicon-menu-hamburger" onClick={this.openLeftMenu}></span>
        <div className="search-filter-reset">
          <span className="change-input">
           <span>Current City:</span>
           <span className="search-input">{city}</span>
           <button className="search-btn" data-toggle="modal" data-target="#myModal">Select City</button>
          </span>
          <span className="change-input">
            <label>Search Shows:</label>
            <input className="filter-input" name="filter" type="text" onChange={this.handleCriteriaChange} value={searchTerm}></input>
            <button className="filter-btn" onClick={this.filterShows}>Search</button>
          </span>
          <span className="change-input">
            <button onClick={this.resetShows}>Reset</button>
          </span>
        </div>
      </div>
    );
  }

});
