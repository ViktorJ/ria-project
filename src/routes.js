'use strict';

let React = require('react'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    Wrapper = require('./components/wrapper'),
    Home = require('./components/home'),
    LoginComponent = require('./components/logincomponent'),
    CreateUser = require('./components/createuser'),
    Note = require('./components/note');

module.exports = (
    <Route path="/" component={Wrapper}>
        <IndexRoute component={LoginComponent} />
        <Route path="/home" component={Home} />
        <Route path="/home/edit/:key" component={Home} />
        <Route path="/createUser" component={CreateUser} />
        <Route path="/note/:key" component={Note} />
    </Route>
);

