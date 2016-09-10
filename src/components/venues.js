import React from 'react';
import Reflux from 'reflux';
import {concertStore} from '../stores/show_store';
import {concertActions} from '../actions/show_actions';
import {menuActions} from '../actions/menu_actions';
import {Checkbox} from './checkbox';
import '../styles/styles';
import '../styles/menu';

export var Venues = React.createClass({
  mixins: [
    Reflux.connect(concertStore, "concertStatus")
  ],

	getInitialState() {
		return {venueInput: "", toglleAllChecked: true};
	},

  filterShowsByVenues() {
    var venues = this.state.concertStatus.venues;
    concertActions.filterByVenues(venues);
    menuActions.closeLeftMenu();
  },

  toggleAll(checked) {
		debugger;
		if (checked === true) {
			var blankArray = [];
			concertActions.updateVenues(blankArray);
			this.setState({toggleAllChecked: false});
		} else {
			concertActions.updateVenues();
			this.setState({toggleAllChecked: true});
		}
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
		var toggleAllChecked = this.state.toggleAllChecked;
    return (
      <div>
				<div className="venues-filter">
				<div>
				 <button className="wide-btn" onClick={this.filterShowsByVenues}>Filter Shows By Venue</button>
				 <div>
					 <label className="search-label">Search Venues:</label>
					 <input name="venue-text-filter" type="text" onChange={this.venueInputChange} value={venueInput}></input>
					 <button className="search-btn" onClick={this.filterVenues}>Search</button>
				 </div>
				</div>
					<Checkbox checked={toggleAllChecked} onChange={this.toggleAll(toggleAllChecked)} venue={"Toggle All"}/>
					{venuesMarkup}
				</div>
      </div>
    );
  }
});


