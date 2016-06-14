import React from 'react';
import Reflux from 'reflux';
import {concertActions} from './actions/show_actions';
import {concertStore} from './stores/show_store';
import {citysJSON} from './responses/citys';
import {showsJSON} from './responses/shows';

export var CityModal = React.createClass({

  mixins: [
    Reflux.connect(concertStore, "showStatus")
  ],

	getInitialState() {
		return ({
			criteria: "",
			id: "",
			name: ""
		});
	},

	handleSearch() {
		concertActions.citySearch(citysJSON);
	},

	handleChange(event) {
		this.setState({criteria: event.target.value});
	},

	handleSave() {
		concertActions.setCity(this.state);
	},

	getCityState(result) {
		return (result.city + ", " + result.state);
	},

	selectedCity(event) {
		this.setState({
			id: event.target.value,
			name: event.target.dataset.name
		});
	},

	getSearchResultsMarkup(results) {
    if ( results !== undefined ) {
      var resultsMarkup = results.map((result, index) => {
        return (
					<div key={index}>
						<input type="radio" name="city" onClick={this.selectedCity} data-name={result.city} value={result.metro_id}/>{this.getCityState(result)}
					</div>
        );
      });
    } else {
      var resultsMarkup = function() {
        return (
          <div></div>   
        );
      }
    }
    return resultsMarkup;
	},

	render() {		
		var searchResultsMarkup = this.getSearchResultsMarkup(this.state.showStatus.citySearchResult);

		return (
			<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title" id="myModalLabel">City Search</h4>
						</div>
						<div className="modal-body">
							<div className="row">
								<div className="col-xs-12">
									<label>City Search:</label>
									<input className="search-input" name="search-bar" type="text" onChange={this.handleChange} value={this.state.criteria}></input>
									<button className="search-btn" onClick={this.handleSearch}>Search</button>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									{searchResultsMarkup} 
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary" onClick={this.handleSave}>Save City</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

});
