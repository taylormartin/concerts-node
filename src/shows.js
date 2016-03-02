import React from 'react';
import Reflux from 'reflux';
import {concertStore} from './store';
import {concertActions} from './actions';
import './styles';

export var Shows = React.createClass({

  mixins: [
    Reflux.connect(concertStore, "shows"),
  ],

  getInitialState() {
    return {
      shows: []
    };
  },
  
  getShowsMarkup(shows) {
    if ( shows !== undefined ) {
      var showsMarkup = shows.map((show, index) => {
        return (
          <div className="concert-card" key={index}>
            <div>{show.artist_name}</div>
            <div>{show.venue_name}</div>
            <div>{show.date}</div>
            <div>{show.link}</div>
          </div>
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
    var shows = this.state.shows;

    var showsMarkup = this.getShowsMarkup(shows);

    return (
      <div>
        {showsMarkup} 
      </div>
    );
  }

});

