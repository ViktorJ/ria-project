'use strict';

let React = require("react"),
    ptypes = React.PropTypes,
    Router = require('react-router').Router,
    ReactRedux = require('react-redux'),
    Link = require('react-router').Link,
    Navigation = require('react-router').Navigation,
    Alert = require("./alert"),
    actions = require('../actions/actions'),
    C = require('../constants');

const Login = React.createClass({
    redirect: function(){
        this.props.history.pushState(null, '/home');
    },
    handleLoginSubmit: function(e){
        let user = {
            email: this.refs.email.value,
            password: this.refs.password.value
        };

        this.props.login(user);

        e.preventDefault();
    },
    render: function(){
        if(this.props.auth.current === C.LOGGED_IN){
            this.redirect();
        }
        if(this.props.auth.current === C.AWAITING_AUTH){
            return (
                <div className="col-sm-2 col-md-2 col-lg-2 centered">
                    <i className="fa fa-spinner fa-5x fa-spin text-center"></i>
                </div>
                );
        } else {
            return (
                <div className="col-sm-6 col-md-6 col-lg-6 centered">
                <h1 className="text-center large">YetAnotherNoteApp</h1>
                <div className="well">
                <h3>Login to access your notes</h3>
                <p className="small">If you don't have an account, sign up with the button below</p>
                <form className="form loginform" onSubmit={this.handleLoginSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control" ref="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" ref="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-default">Login</button>
                  <button type="button" className="btn btn-info" onClick={this.props.initial}><Link to="/createUser">New account</Link></button>
                </form>
                <Alert alertClass={this.props.alert.alertClass} alertMsg={this.props.alert.alertMsg}/>
                </div>
                </div>
            );
        }
    }
});

let mapStateToProps = function(state){
    return {
        alert:state.alert,
        auth:state.auth
    };
};

let mapDispatchToProps = function(dispatch){
    return {
        initial: function(){
            dispatch(actions.initial());
        },
        login: function(user){
            dispatch(actions.login(user));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Login);