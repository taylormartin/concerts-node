import Reflux from 'reflux';
import {concertActions} from '../actions/show_actions';
import {showsJSON} from '../responses/shows';

export var concertStore = Reflux.createStore({

  listenables: concertActions,

  init() {
    this.data = {
      selectedCity: {text: "", id: ""},
			citySearchResult: [],
			startDate: "",
			endDate: "",
      venues:  [],
      shownVenues: [],
      allVenues: [],
      shows: [],
      allShows: [],
    };
  },

  getInitialState: function () {
    return this.data;
  },

	onSearchForShows() {

	},

	onSearchForCities() {

	},

	onSetStartDate(startDate) {
		this.data.startDate = startDate;
		this.trigger(this.data);
	},

	onSetEndDate(endDate) {
		this.data.endDate = endDate;
		this.trigger(this.data);
	},

	onSetCity(modalState) {
		this.data.selectedCity.text = modalState.name;
		this.data.selectedCity.id = modalState.id;
    this.trigger(this.data);
	},

  //onCitySearch(citysJSON) {
	//	this.data.citySearchResult = citysJSON;
  //  this.trigger(this.data);
  //},

  onTextFilterVenues(criteria) {
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
    var allShows = this.data.allShows;
    var filteredShows = [];
		var venues = this.data.venues;
    for (var index in allShows) {
      var show = allShows[index];
      var matcher = new RegExp(criteria, "gi");
      var match = show.artist_name.match(matcher);
      var venueMatch = (venues.indexOf(show.venue_name) === -1 ? false : true)
      if ( match !== null && match.length > 0 && venueMatch) {
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
