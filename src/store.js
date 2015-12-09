'use strict';

let Redux = require('redux'),
    alertReducer = require('./reducers/alert'),
    authReducer = require('./reducers/auth'),
    thunk = require('redux-thunk'),
    initialState = require('./initialstate');

let reducers = Redux.combineReducers({
    auth: authReducer,
    alert: alertReducer
});

module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(reducers, initialState);