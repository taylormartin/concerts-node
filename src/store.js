import Reflux from 'reflux';
import {concertActions} from './actions';

export var concertStore = Reflux.createStore({
  
  listenables: concertActions,

  init() {
    this.selectedCity = null;
    this.selectedVenues = [];
    this.allVenues = [];
    this.shows = [];
    this.showsUnfiltered = [];
    this.filteredShows = [];
    this.criteria = null;
  },

  onCitySearch(showsJSON) {
    console.log(showsJSON);
    this.shows = showsJSON['concerts'];
    this.allVenues = showsJSON['venues'];
    this.showsUnfiltered = showsJSON['concerts'];
    this.trigger(this.shows);
  },

  onFilterShows(criteria) {
    this.criteria = criteria;
    var filteredShows = [];
    for (var index in this.shows) {
      var show = this.shows[index];
      var matcher = new RegExp(criteria, "gi");
      var match = show.artist_name.match(matcher);
      if ( match !== null && match.length > 0 ) {
        filteredShows.push(show);
      }
    }
    this.shows = filteredShows;
    this.trigger(this.shows);
  }

});
