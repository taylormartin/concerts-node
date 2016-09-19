import React from 'react';
import Reflux from 'reflux';
import ReactDOM from 'react-dom';
import {CityModal} from './city_modal';
import {ShowFilter} from './show_filter';
import {Menu} from './menu';
import {concertStore} from '../stores/show_store';
import {menuStore} from '../stores/menu_store';
import {concertActions} from '../actions/show_actions';
import '../styles/styles';
import '../styles/menu';

export var Show = React.createClass({

	render() {
		var show = this.props.show;

		return (
			<div key={this.props.key} className="col-lg-2">
				<div className="concert-card">
					<div>{show.artist_name}</div>
					<div>{show.venue_name}</div>
					<div>{show.date}</div>
					<a target="_blank" href={show.link}>Concert Link</a>
				</div>
			</div>
		);
	}

});
