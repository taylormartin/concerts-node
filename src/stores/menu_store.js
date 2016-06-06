import Reflux from 'reflux';
import {menuActions} from '../actions/menu_actions';

export var menuStore = Reflux.createStore({
  
  listenables: menuActions,

  init() {
    this.data = {
      leftMenuActive: "",
      bodyWrapper: "",
      oWrapper: ""
    };
  },

  getInitialState: function () {
    return this.data;
  },

  openLeftMenu() {
    this.data.leftMenuActive = "is-active";
    this.data.bodyWrapper = "has-active-menu";
    this.data.oWrapper = "has-slide-left";
    this.trigger(this.data);
  },
  
  closeLeftMenu() {
    this.data.leftMenuActive = "";
    this.data.bodyWrapper = "";
    this.data.oWrapper = "";
    this.trigger(this.data);
  }

});

