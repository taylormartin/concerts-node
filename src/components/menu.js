import React from 'react';
import Reflux from 'reflux';
import {concertActions} from '../actions/show_actions';
import {menuActions} from '../actions/menu_actions';
import {Venues} from './venues';
import '../styles/styles';
import '../styles/menu';

export var Menu = React.createClass({

  close() {
    menuActions.closeLeftMenu();
  },

  render() {
    return (
      <nav className={"c-menu c-menu--slide-left " + this.props.active}>
        <div onClick={this.close} className="c-menu__close">
					<span className="glyphicon glyphicon-remove pull-right"></span>
				</div>
        <Venues/>
      </nav>
    );
  }

});
