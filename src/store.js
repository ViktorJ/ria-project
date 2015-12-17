'use strict';

let Redux = require('redux'),
    alertReducer = require('./reducers/alert'),
    authReducer = require('./reducers/auth'),
    notesReducer = require('./reducers/notes'),
    thunk = require('redux-thunk'),
    initialState = require('./initialstate');

let reducers = Redux.combineReducers({
    auth: authReducer,
    alert: alertReducer,
    notes: notesReducer
});

module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(reducers, initialState);