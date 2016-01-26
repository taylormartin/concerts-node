import Reflux from 'reflux';
import {concertActions} from './actions';

export var concertStore = Reflux.createStore({
  
  listenables: concertActions,

  init() {
    this.selectedCity = null;
    this.selectedVenues = [];
  },

  onCitySearch: function() {
    console.log("logging from the store");
  }

});
