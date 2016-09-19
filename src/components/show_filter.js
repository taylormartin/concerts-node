import React from 'react';
import Reflux from 'reflux';
import {concertStore} from '../stores/show_store';
import {concertActions} from '../actions/show_actions';
import {menuActions} from '../actions/menu_actions';
import '../styles/styles';
import '../styles/menu';

export var ShowFilter = React.createClass({

  mixins: [
    Reflux.connect(concertStore, "showStatus")
  ],

	getInitialState() {
		return {
			searchTerm: "",
		};
	},

  handleCriteriaChange(event) {
		this.setState({searchTerm: event.target.value});
  },

  startDateChange(event) {
		var startDate = event.target.value;
		concertActions.setStartDate(startDate);
  },

  endDateChange(event) {
		var endDate = event.target.value;
		concertActions.setEndDate(endDate);
  },

  filterShows() {
    var criteria = this.state.searchTerm;
    concertActions.filterShows(criteria);
  },

	searchForShows() {
		concertActions.searchForShows();
	},

  resetShows() {
    concertActions.resetShows();
  },

  openLeftMenu() {
    menuActions.openLeftMenu();
  },

  render() {
    var city = this.state.showStatus.selectedCity.text;
		var startDate = this.state.showStatus.startDate;
		var endDate = this.state.showStatus.endDate;
    var searchTerm = this.state.searchTerm;

    return (
      <div className="row search-filter-bar">
        <span className="venue-filter-btn glyphicon glyphicon-menu-hamburger" onClick={this.openLeftMenu}></span>
        <div className="search-filter-reset">
					<label>Start Date:</label>
					<input type="date" name="start-date" onChange={this.startDateChange} value={startDate}></input>
					<label>End Date:</label>
					<input type="date" name="end-date" onChange={this.endDateChange} value={endDate}></input>
          <span className="change-input">
           <span>Current City:</span>
           <span className="search-input">{city}</span>
           <button className="search-btn" data-toggle="modal" data-target="#myModal">Select City</button>
          </span>
          <span className="change-input">
            <label>Filter Shows:</label>
            <input className="filter-input" name="filter" type="text" onChange={this.handleCriteriaChange} value={searchTerm}></input>
            <button className="filter-btn" onClick={this.filterShows}>Filter by Artist</button>
          </span>
          <span className="change-input">
            <button onClick={this.resetShows}>Reset</button>
          </span>
          <span className="change-input">
            <button onClick={this.searchForShows}>Search</button>
          </span>
        </div>
      </div>
    );
  }

});
