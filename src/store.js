var Redux = require('redux');
var alertReducer = require('./reducers/alert');
var initialState = require('./initialstate');

var reducers = Redux.combineReducers({
    alert: alertReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;