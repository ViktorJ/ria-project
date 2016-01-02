'use strict';

let React = require('react'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    Wrapper = require('./components/wrapper'),
    Home = require('./components/home'),
    Login = require('./components/login'),
    CreateUser = require('./components/createuser'),
    Note = require('./components/note'),
    EditNote = require('./components/editnote');

module.exports = (
    <Route path="/" component={Wrapper}>
        <IndexRoute component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/home/edit/:key" component={Home} />
        <Route path="/createUser" component={CreateUser} />
        <Route path="/note/:key" component={Note} />
        <Route path="/editNote/:key" component={EditNote} />
    </Route>
);

