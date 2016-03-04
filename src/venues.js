import React from 'react';
import Reflux from 'reflux';
import {concertStore} from './store';
import {concertActions} from './actions';
import './styles';

export var Venues = React.createClass({
  mixins: [
    Reflux.connect(concertStore)
  ],

  filterByVenues() {
    concertActions.filterByVenues();
  },

  uncheckAll() {
    this.setState({venues: []});
  },

  venueChange(event) {
    var venue = event.target.value;
    var checked = event.target.checked;
    if (checked) {
      this.state.venues.push(venue);
    } else {
      var i = this.state.venues.indexOf(venue);
      this.state.venues.splice(i, 1);
    }
  },

  getVenuesMarkup(venues, allVenues) {
    var venuesMarkup = allVenues.map((venue, index) => {
      if ( venues.indexOf(venue) === -1 ) {
        return (
          <div key={index}><input onClick={this.venueChange} className="venue-checkbox" type="checkbox" value={venue} checked={false}/>{venue}</div>
        );
      } else {
        return (
          <div key={index}><input onClick={this.venueChange} className="venue-checkbox" type="checkbox" value={venue} defaultChecked />{venue}</div>
        );
      }
    });
    return venuesMarkup;
  },

  render() {
    var venues = this.state.venues;
    var allVenues = this.state.allVenues;
    var venuesMarkup = this.getVenuesMarkup(venues, allVenues);
    return (
      <div>
        <button onClick={this.uncheckAll}>Uncheck All</button>
        <button onClick={this.filterByVenues}>Filter Venues</button>
        {venuesMarkup} 
      </div>
    );
  }
});

