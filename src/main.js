var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Provider = require('react-redux').Provider;
var store = require('./store');
var routes = require('./routes');



ReactDOM.render((
    <Provider store={store}>
        <Router routes={routes}/>
    </Provider>
), document.getElementById('content'));