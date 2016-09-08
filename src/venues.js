import React from 'react';
import Reflux from 'reflux';
import {concertStore} from './stores/show_store';
import {concertActions} from './actions/show_actions';
import {menuActions} from './actions/menu_actions';
import './styles/styles';
import './styles/menu';

export var Venues = React.createClass({
  mixins: [
    Reflux.connect(concertStore, "concertStatus")
  ],

	getInitialState() {
		return {venueInput: ""};
	},

  filterShowsByVenues() {
    var venues = this.state.concertStatus.venues;
    concertActions.filterByVenues(venues);
    menuActions.closeLeftMenu();
  },

  uncheckAll() {
    var blankArray = [];
    concertActions.updateVenues(blankArray);
  },

  venueChange(event) {
    var venue = event.target.value;
    var checked = event.target.checked;
    var newVenues = this.state.concertStatus.venues;
    var currentVenues = this.state.concertStatus.venues;
    if (checked) {
      newVenues.push(venue);
    } else {
      var i = this.state.concertStatus.venues.indexOf(venue);
      newVenues.splice(i, 1);
    }
    concertActions.updateVenues(newVenues);
  },

  filterVenues(event) {
    concertActions.textFilterVenues(this.state.venueInput);
  },

	venueInputChange(event) {
		this.setState({venueInput: event.target.value});
	},

  getVenuesMarkup(venues, shownVenues) {
    var venuesMarkup = shownVenues.map((venue, index) => {
      var checked = false;
      if ( venues.indexOf(venue) !== -1 ) {
        checked = true;
      }
      return (
        <Checkbox checked={checked} onChange={this.venueChange} venue={venue} key={index}/>
      );
    });
    return venuesMarkup;
  },

  render() {
    var venues = this.state.concertStatus.venues;
    var shownVenues = this.state.concertStatus.shownVenues;
    var venuesMarkup = this.getVenuesMarkup(venues, shownVenues);
    var venueInput = this.state.venueInput;
    return (
      <div>
        <div>
         <label>Search Venues:</label>
         <input name="venue-text-filter" type="text" onChange={this.venueInputChange} value={venueInput}></input>
        </div>
        <div className="venues-filter">
          <button onClick={this.uncheckAll}>Uncheck All</button>
          <button onClick={this.filterVenues}>Search</button>
          <button onClick={this.filterShowsByVenues}>Filter By Venue</button>
          {venuesMarkup}
        </div>
      </div>
    );
  }
});

var Checkbox = React.createClass({

  render() {
    return (
      <div className="row">
        <input className="venue-checkbox" type="checkbox" onChange={this.props.onChange} value={this.props.venue} checked={this.props.checked}/>
        <span className="venue-text">{this.props.venue}</span>
      </div>
    );
  }

});

