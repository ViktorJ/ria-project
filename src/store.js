'use strict';

let Redux = require('redux'),
    alertReducer = require('./reducers/alert'),
    initialState = require('./initialstate');

let reducers = Redux.combineReducers({
    alert: alertReducer, 
});

let store = Redux.createStore(reducers, initialState());

module.exports = store;