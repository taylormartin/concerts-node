import Reflux from 'reflux';

export var concertActions = Reflux.createActions([
	'setCity',
	'setStartDate',
	'setEndDate',
  'filterShows',
  'filterByVenues',
  'resetShows',
  'textFilterVenues',
  'updateVenues',
	'searchForShows',
	'searchForCities'
]);
