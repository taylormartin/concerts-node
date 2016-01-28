import Reflux from 'reflux';
import {concertActions} from './actions';

export var concertStore = Reflux.createStore({
  
  listenables: concertActions,

  init() {
    this.selectedCity = null;
    this.selectedVenues = [];
    this.shows = {};
  },

  onCitySearch(showsJSON) {
    console.log(showsJSON);
    this.shows = showsJSON;
    this.trigger(this.shows);
  }

});
