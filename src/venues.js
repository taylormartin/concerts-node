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
    var venues = this.state.venues;
    concertActions.filterByVenues(venues);
  },

  uncheckAll() {
    this.setState({venues: []});
  },

  venueChange(event) {
    var venue = event.target.value;
    var checked = event.target.checked;
    var newVenues = this.state.venues;
    if (checked) {
      newVenues.push(venue);
    } else {
      var i = this.state.venues.indexOf(venue);
      newVenues.splice(i, 1);
    }
    this.setState({venues: newVenues});
  },

  getVenuesMarkup(venues, allVenues) {
    var venuesMarkup = allVenues.map((venue, index) => {
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

var Checkbox = React.createClass({

  render() {
    return (
      <div>
        <input className="venue-checkbox" type="checkbox" onChange={this.props.onChange}
           value={this.props.venue} checked={this.props.checked}/>
        {this.props.venue}
      </div>
    );
  }

});

