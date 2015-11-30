var React = require("react");
var ptypes = React.PropTypes;
var ReactRedux = require('react-redux');
var Router = require('react-router').Router;
var Link = require('react-router').Link;
var Alert = require("./alert");
var actions = require('../actions');
var myFirebase = "https://sizzling-torch-6425.firebaseio.com";

var CreateUser = React.createClass({
    handleCreateUser: function(e){
        e.preventDefault();
        
        var user = {
            email   : this.refs.email.value,
            password: this.refs.password.value
        };
        
        this.firebaseRef = new Firebase(myFirebase);
        var authData = this.firebaseRef.getAuth();
        
        var self = this;
        this.firebaseRef.createUser(user, function(error, userData) {
          if (error) {
            console.log("Error creating user:", error);
           self.props.registerFail();
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
            self.props.registerSucc();
          }
        });
    },
    render: function(){
        return (
            <div className="col-sm-6 col-md-6 col-lg-6">
                <h1>New account</h1>
                <h3>Fill in the form and submit to create a new account</h3>
                <form onSubmit={this.handleCreateUser}>
                  <div className="form-group">
                    <input type="text" className="form-control" ref="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" ref="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Create</button>
                </form>
                <button className="btn btn-info" onClick={this.props.initial}><Link to="/">Back</Link></button>
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
        registerSucc: function(){
            dispatch(actions.alertRegisterSucc());
        },
        registerFail: function(){
            dispatch(actions.alertRegisterFail());
        },
        initial: function(){
            dispatch(actions.initial());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(CreateUser);