'use strict';

let React = require('react'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    Wrapper = require('./components/wrapper'),
    Welcome = require('./components/welcome'),
    LoginComponent = require('./components/logincomponent'),
    CreateUser = require('./components/createuser');

module.exports = (
    <Route path="/" component={Wrapper}>
        <IndexRoute component={LoginComponent} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/createUser" component={CreateUser} />
    </Route>
);

