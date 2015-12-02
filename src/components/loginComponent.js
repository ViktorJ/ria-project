'use strict';

let React = require("react"),
    ptypes = React.PropTypes,
    Router = require('react-router').Router,
    ReactRedux = require('react-redux'),
    Link = require('react-router').Link,
    Navigation = require('react-router').Navigation,
    Alert = require("./alert"),
    actions = require('../actions'),
    C = require('../constants');

let LoginComponent = React.createClass({
    mixins: [Navigation],
    redirect: function(){
        this.props.history.pushState(null, '/welcome');
    },
    handleLoginSubmit: function(e){
        e.preventDefault();
        
        let user = {
            email   : this.refs.email.value,
            password: this.refs.password.value
        };
        
        this.firebaseRef = new Firebase(C.FIREBASE_URL);
        let authData = this.firebaseRef.getAuth();
        
        let self = this;
        function authHandler(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
            self.props.loginFail();
          } else {
              console.log("Authenticated successfully with email: ", authData.password.email);
              self.redirect();
          }
        }
        this.firebaseRef.authWithPassword(user, authHandler);
    },
    render: function(){
        return (
            <div className="col-sm-8 col-md-8 col-lg-8">
            <h1>Login</h1>
            <form className="form-inline" onSubmit={this.handleLoginSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" ref="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" ref="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
              <button type="button" className="btn btn-info" onClick={this.props.initial}><Link to="/createUser">New account</Link></button>
            </form>
            <Alert alertClass={this.props.alert.alertClass} alertMsg={this.props.alert.alertMsg}/>
            </div>
        );
    }
});

let mapStateToProps = function(state){
    return {alert:state.alert};
};

let mapDispatchToProps = function(dispatch){
    return {
        loginFail: function(){
            dispatch(actions.alertLoginFail());
        },
        initial: function(){
            dispatch(actions.initial());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(LoginComponent);