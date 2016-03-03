import Reflux from 'reflux';
import {concertActions} from './actions';

export var concertStore = Reflux.createStore({
  
  listenables: concertActions,

  init() {
    this.data = {
      selectedCity = null,
      venues = [],
      allVenues = [],
      shows = [],
      allShows = [],
      filteredShows = [],
      criteria = null
    };
  },

  onCitySearch(showsJSON) {
    console.log(showsJSON);
    this.data.shows = showsJSON['concerts'];
    this.data.allShows = showsJSON['concerts'];
    this.data.venues = showsJSON['venues'];
    this.data.allVenues = showsJSON['venues'];
    this.trigger(this.data);
  },

  onFilterShows(criteria) {
    this.data.criteria = criteria;
    var filteredShows = [];
    for (var index in this.data.shows) {
      var show = this.data.shows[index];
      var matcher = new RegExp(criteria, "gi");
      var match = show.artist_name.match(matcher);
      if ( match !== null && match.length > 0 ) {
        filteredShows.push(show);
      }
    }
    this.shows = filteredShows;
    this.trigger(this.shows);
  },

  onResetShows() {
    this.shows = this.allShows;
    this.trigger(this.shows);
  }

});
