'use strict';

let React = require("react"),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    Router = require('react-router').Router,
    Link = require('react-router').Link,
    Alert = require("./alert"),
    actions = require('../actions/actions'),
    C = require('../constants');

const CreateUser = React.createClass({
    handleCreateUser: function(e){
        e.preventDefault();
        
        let user = {
            email   : this.refs.email.value,
            password: this.refs.password.value
        };
        
        this.props.registerUser(user);
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
                  <button type="button" className="btn btn-info" onClick={this.props.initial}><Link to="/">Back</Link></button>
                </form>
                <Alert alertClass={this.props.alert.alertClass} alertMsg={this.props.alert.alertMsg}/>
            </div>
        );
    }
});

let mapStateToProps = function(state){
    return {alert:state.alert,
           auth:state.auth};
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
        },
        registerUser: function(user){
            dispatch(actions.createUser(user));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(CreateUser);