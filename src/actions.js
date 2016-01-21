import Reflux from 'reflux';

export var actions = Reflux.createActions({
  'citySearch': {asyncResult: true},
});

actions.citySearch.listenAndPromise(function(city){
 return {}; 
});
