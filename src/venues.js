import React from 'react';
import Reflux from 'reflux';
import {concertStore} from './store';
import {concertActions} from './actions';
import './styles';

export var Venues = React.createClass({
  mixins: [
    Reflux.connect(concertStore)
  ],

  getVenuesMarkup(venues) {
    if ( venues !== undefined ) {
      var venuesMarkup = venues.map((venue, index) => {
        return (
          <div key={index}><input className="venue-checkbox" type="checkbox" value={venue}/>{venue}</div>
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
      </div>
    );
  }
});

