import React from 'react';
import Reflux from 'reflux';
import {concertActions} from './actions/show_actions';
import {concertStore} from './stores/show_store';

export var CityModal = React.createClass({

  mixins: [
    Reflux.connect(concertStore)
  ],

	handleClick() {
		concertActions.setCity();
	},

	handleChange(event) {
		this.setState({criteria: event.target.value});
	},

	render() {		
		var city = this.state.selectedCity;

		return (
			<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title" id="myModalLabel">City Search</h4>
						</div>
						<div className="modal-body">
							<label>City Search:</label>
							<input className="search-input" name="search-bar" type="text" onChange={this.handleChange} value={city}></input>
							<button className="search-btn" onClick={this.handleClick}>Search</button>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save City</button>
						</div>
					</div>
				</div>
			</div>
		);
	},

});
