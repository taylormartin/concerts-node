import React from 'react';
import Reflux from 'reflux';
import ReactDOM from 'react-dom';
import {concertStore} from './store';
import {concertActions} from './actions';
import {citysJSON} from './responses/citys';
import {showsJSON} from './responses/shows';
import './styles';

var App = React.createClass({

  mixins: [
    Reflux.connect(concertStore, "shows")
  ],

  getInitialState() {
    return {
      cityValue: "i.e. Atlanta",
      shows: {}
    };
  },

  handleChange(event) {
    this.setState({cityValue: event.target.value});
  },

  handleClick() {
    var cityValue = this.state.cityValue;
    concertActions.citySearch(showsJSON);
  },

  render() {
    var cityValue = this.state.cityValue;

    var shows = this.state.shows["concerts"];

    if ( shows !== undefined ) {
      var showsMarkup = shows.map((show) => {
        return (
          <div className="concert-card">
            <div>{show.artist_name}</div>
            <div>{show.venue_name}</div>
            <div>{show.date}</div>
            <div>{show.link}</div>
          </div>
        );
      });
    } else {
      var showsMarkup = function() {
        return(
          <div></div>   
        );
      }
    }

    return (
      <div>
        <div>
          <label>City Search:</label>
          <input name="search-bar" type="text" onChange={this.handleChange} value={cityValue}></input>
          <button onClick={this.handleClick}>Search</button>
        </div>
        <div>
          {showsMarkup} 
        </div>
      </div>
    );
  }

});

ReactDOM.render(<App/>, document.getElementById('main'));

