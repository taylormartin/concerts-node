import React from 'react';
import Reflux from 'reflux';
import ReactDOM from 'react-dom';
import {Filter} from './filter';
import {Venues} from './venues';
import {concertStore} from './store';
import {concertActions} from './actions';
import './styles';

export var Shows = React.createClass({

  mixins: [
    Reflux.connect(concertStore),
  ],
  
  getShowsMarkup(shows) {
    if ( shows !== undefined ) {
      var showsMarkup = shows.map((show, index) => {
        return (
          <div key={index} className="col-lg-2">
            <div className="concert-card">
              <div>{show.artist_name}</div>
              <div>{show.venue_name}</div>
              <div>{show.date}</div>
              <a href={show.link}>Concert Link</a>
            </div>
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
        <Venues/>
        <Filter/>
        <div className="row">
          {showsMarkup} 
        </div>
      </div>
    );
  }

});

ReactDOM.render(<Shows/>, document.getElementById('shows'));
