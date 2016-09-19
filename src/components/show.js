import React from 'react';
import '../styles/styles';

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
