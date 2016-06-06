import Reflux from 'reflux';
import {concertActions} from '../actions/show_actions';

export var concertStore = Reflux.createStore({
  
  listenables: concertActions,

  init() {
    this.data = {
      selectedCity: "atlanta",
      venues:  [],
      shownVenues: [],
      allVenues: [],
      shows: [],
      allShows: [],
      criteria: "widespread",
      venueCriteria: ""
    };
  },

  getInitialState: function () {
    return this.data;
  },

	onSetCity() {

	},

  onCitySearch(showsJSON) {
    this.data.shows = showsJSON['concerts'].slice(0);
    this.data.allShows = showsJSON['concerts'].slice(0);
    this.data.venues = showsJSON['venues'].slice(0);
    this.data.shownVenues = showsJSON['venues'].slice(0);
    this.data.allVenues = showsJSON['venues'].slice(0);
    this.trigger(this.data);
  },

  onTextFilterVenues(criteria) {
    this.data.venueCriteria = criteria;
    var allVenues = this.data.allVenues;
    var filteredVenues = [];
    for (var index in allVenues) {
      var venue = allVenues[index];
      var matcher = new RegExp(criteria, "gi");
      var match = venue.match(matcher);
      if ( match !== null && match.length > 0 ) {
        filteredVenues.push(venue);
      }
    }
    this.data.shownVenues = filteredVenues;
    this.trigger(this.data);
  },

  onUpdateVenues(newVenues) {
    this.data.venues = newVenues;
    this.trigger(this.data);
  },

  onFilterByVenues(venues) {
    var filteredShows = [];
    var allShows = this.data.allShows;
    for (var index in allShows) {
      var show = allShows[index];
      var showInVenues = (venues.indexOf(show.venue_name) === -1 ? false : true)
      if (showInVenues) {
        filteredShows.push(show);
      }
    }
    this.data.shows = filteredShows;
    this.data.venues = venues;
    this.trigger(this.data);
  },

  onFilterShows(criteria) {
    this.data.criteria = criteria;
    var allShows = this.data.allShows;
    var filteredShows = [];
    for (var index in allShows) {
      var show = allShows[index];
      var matcher = new RegExp(criteria, "gi");
      var match = show.artist_name.match(matcher);
      if ( match !== null && match.length > 0 ) {
        filteredShows.push(show);
      }
    }
    this.data.shows = filteredShows;
    this.trigger(this.data);
  },

  onResetShows() {
    this.data.shows = this.data.allShows.slice(0);
    this.data.venues = this.data.allVenues.slice(0);
    this.data.shownVenues = this.data.allVenues.slice(0);
    this.trigger(this.data);
  }

});

