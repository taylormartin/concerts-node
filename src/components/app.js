import React from 'react';
import Reflux from 'reflux';
import ReactDOM from 'react-dom';
import {CityModal} from './city_modal';
import {ShowFilter} from './show_filter';
import {Show} from './show';
import {Menu} from './menu';
import {concertStore} from '../stores/show_store';
import {menuStore} from '../stores/menu_store';
import {concertActions} from '../actions/show_actions';
import '../styles/styles';
import '../styles/menu';

export var Shows = React.createClass({

  mixins: [
    Reflux.connect(concertStore, "showStatus"),
    Reflux.connect(menuStore, "menuStatus"),
  ],

  getShowsMarkup(shows) {
    if ( shows !== undefined ) {
      var showsMarkup = shows.map((show, index) => {
        return (
					<Show key={index} show={show}/>
        );
      });
    } else {
      var showsMarkup = function() {
        return (
          <div></div>   
        );
      }
    }
    return showsMarkup;
  },

  render() {
    var shows = this.state.showStatus.shows;
    var menu = this.state.menuStatus;
    var showsMarkup = this.getShowsMarkup(shows);

    return (
      <div>
        <Menu active={menu.leftMenuActive} />
        <div className={"total-wrapper " + menu.bodyWrapper}>
          <div className={menu.oWrapper + " o-wrapper"}>
            <ShowFilter/>
            <div className="row">
              {showsMarkup} 
            </div>
          </div>
          <div className={menu.leftMenuActive + " c-mask"}></div>
        </div>
				<CityModal/>
      </div>
    );
  }

});

ReactDOM.render(<Shows/>, document.getElementById('shows'));
