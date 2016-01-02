"use strict";

let React = require("react"),
    C = require('../constants'),
    ReactRedux = require('react-redux'),
    Link = require('react-router').Link,
    actions = require('../actions/actions');

const Navbar = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <p className="navbar-brand">YetAnotherNoteApp</p>
                <div className="navbar-right">
                    <p className="navbar-text"><i className="fa fa-user"></i> {this.props.auth.email}</p>
                    <Link to="/"><button className="btn btn-sm navbar-text" onClick={this.props.logout}>Logout</button></Link>
                </div>
            </div>
            </nav>
        );
    }
});

let mapStateToProps = function(state){
    return {
        auth:state.auth
    };
};

let mapDispatchToProps = function(dispatch){
    return {
        logout: function(){
            dispatch(actions.logout());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Navbar);