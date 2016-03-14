import React from 'react';
import Reflux from 'reflux';
import {concertActions} from './actions/show_actions';
import {menuActions} from './actions/menu_actions';
import './styles/styles';
import './styles/menu';

export var Menu = React.createClass({

  close() {
    menuActions.closeLeftMenu();
  },

  render() {
    return (
      <nav className={"c-menu c-menu--slide-left " + this.props.active}>
        <button onClick={this.close} className="c-menu__close">&larr; Close Menu</button>
        <ul className="c-menu__items">
          <li className="c-menu__item"><a href="#" className="c-menu__link">Home</a></li>
          <li className="c-menu__item"><a href="#" className="c-menu__link">About</a></li>
          <li className="c-menu__item"><a href="#" className="c-menu__link">Services</a></li>
          <li className="c-menu__item"><a href="#" className="c-menu__link">Work</a></li>
          <li className="c-menu__item"><a href="#" className="c-menu__link">Contact</a></li>
        </ul>  
      </nav>
    );
  }

});
