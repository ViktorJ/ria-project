'use strict';

let React = require("react");
let NewNote = require("./newnote");
let Navbar = require("./navbar");

const Home = React.createClass({
    render: function(){
        return (
            <div className='home'>
            <Navbar />
            <NewNote />
            </div>
        );
    }
});

module.exports = Home;