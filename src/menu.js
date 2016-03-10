import React from 'react';
import Reflux from 'reflux';
import {concertStore} from './store';
import {concertActions} from './actions';
import './styles';

export var Menu = React.createClass({
  
  getInitialState() {
    return {
      visibile: false
    }
  },

  show() {
    this.setState({visible: true}); 
  },

  hide() {
    this.setState({visible: false}); 
  },

  render() {
    return (
      <div className="menu">
        <div className={(this.state.visible ? "visible " : "") + this.props.alignment}></div>
      </div>
    );
  }

});
