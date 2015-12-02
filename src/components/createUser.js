'use strict';

let React = require("react"),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    Router = require('react-router').Router,
    Link = require('react-router').Link,
    Alert = require("./alert"),
    actions = require('../actions'),
    C = require('../constants');

const CreateUser = React.createClass({
    handleCreateUser: function(e){
        e.preventDefault();
        
        let user = {
            email   : this.refs.email.value,
            password: this.refs.password.value
        };
        
        this.firebaseRef = new Firebase(C.FIREBASE_URL);
        let authData = this.firebaseRef.getAuth();
        
        let self = this;
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
                  <button className="btn btn-info" onClick={this.props.initial}><Link to="/">Back</Link></button>
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