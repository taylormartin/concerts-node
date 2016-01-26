import Reflux from 'reflux';
import {actions} from './actions';

export var store = Reflux.createStore({
  
  listenables: ['actions'],

  init() {
    this.selectedCity = null;
    this.selectedVenues = [];
  },

  onCitySearch: function() {
    console.log("logging from the store");
  }

});
