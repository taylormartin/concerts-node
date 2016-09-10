import React from 'react';
import './styles/styles';

export var Checkbox = React.createClass({

  render() {
    return (
      <div className="row">
        <input className="venue-checkbox" type="checkbox" onChange={this.props.onChange} value={this.props.venue} checked={this.props.checked}/>
        <span className="venue-text">{this.props.venue}</span>
      </div>
    );
  }

});
