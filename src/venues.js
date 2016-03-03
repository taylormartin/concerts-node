import React from 'react';
import Reflux from 'reflux';
import {concertStore} from './store';
import {concertActions} from './actions';
import './styles';

export var Venues = React.createClass({
  mixins: [
    Reflux.connect(concertStore)
  ],

  filterVenues() {

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
    debugger;
  },

  getVenuesMarkup(venues) {
    if ( venues !== undefined ) {
      var venuesMarkup = venues.map((venue, index) => {
        return (
          <div key={index}><input onClick={this.venueChange} className="venue-checkbox" type="checkbox" value={venue} defaultChecked/>{venue}</div>
        );
      });
    } else {
      var venuesMarkup = () => {
        return (
          <div></div>
        );
      }
    }
    return venuesMarkup;
  },

  render() {
    var venues = this.state.venues;
    var venuesMarkup = this.getVenuesMarkup(venues);
    return (
      <div>
        {venuesMarkup} 
        <button onClick={this.filterVenues}>Filter Venues</button>
      </div>
    );
  }
});

