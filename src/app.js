import React from 'react';
import Reflux from 'reflux';
import ReactDOM from 'react-dom';
import {Filter} from './filter';
import {Shows} from './shows';
import {Venues} from './venues';

ReactDOM.render(<Filter/>, document.getElementById('filter'));
ReactDOM.render(<Shows/>, document.getElementById('shows'));
ReactDOM.render(<Venues/>, document.getElementById('venues'));
