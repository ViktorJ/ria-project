var React = require("react");
var ptypes = React.PropTypes;
var Router = require('react-router').Router;
var ReactRedux = require('react-redux');
var Link = require('react-router').Link;
var Navigation = require('react-router').Navigation;
var Alert = require("./alert");
var actions = require('../actions');
var myFirebase = "https://sizzling-torch-6425.firebaseio.com";

var LoginComponent = React.createClass({
    mixins: [Navigation],
    redirect: function(){
        this.props.history.pushState(null, '/welcome');
    },
    handleLoginSubmit: function(e){
        e.preventDefault();
        
        var user = {
            email   : this.refs.email.value,
            password: this.refs.password.value
        };
        
        this.firebaseRef = new Firebase(myFirebase);
        var authData = this.firebaseRef.getAuth();
        
        var self = this;
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
            <div className="col-sm-6 col-md-6 col-lg-6">
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

var mapStateToProps = function(state){
    return {alert:state.alert};
};

var mapDispatchToProps = function(dispatch){
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