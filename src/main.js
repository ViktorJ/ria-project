'use strict';

let React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Provider = require('react-redux').Provider,
    store = require('./store'),
    routes = require('./routes'),
    actions = require('./actions/actions');



ReactDOM.render((
    <Provider store={store}>
        <Router routes={routes}/>
    </Provider>
), document.getElementById('content'));

setTimeout(function(){
    store.dispatch(actions.listeningToAuth());
    store.dispatch(actions.listeningToNotes());
});