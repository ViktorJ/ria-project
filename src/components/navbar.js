"use strict";

let React = require("react"),
    C = require('../constants'),
    ReactRedux = require('react-redux'),
    Link = require('react-router').Link,
    actions = require('../actions/actions');

const Navbar = React.createClass({
    render: function(){
        console.log(this.props);
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <p className="navbar-brand">YetAnotherNoteApp</p>
                <p className="navbar-text navbar-right">{}</p>
                <Link to="/"><button className="btn btn-sm navbar-text navbar-right" onClick={this.props.logout}>Logout</button></Link>
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