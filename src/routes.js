var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Wrapper = require('./components/wrapper');
var Welcome = require('./components/welcome');
var LoginComponent = require('./components/logincomponent');
var CreateUser = require('./components/createuser');

module.exports = (
    <Route path="/" component={Wrapper}>
        <IndexRoute component={LoginComponent} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/createUser" component={CreateUser} />
    </Route>
);

