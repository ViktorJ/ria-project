"use strict";

let React = require("react"),
    C = require('../constants'),
    Link = require('react-router').Link;

const Navbar = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <p className="navbar-brand">YetAnotherNoteApp</p>
                <p className="navbar-text navbar-right">Logged in</p>
            </div>
            </nav>
        );
    }
});

module.exports = Navbar;