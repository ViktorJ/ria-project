'use strict';

let React = require("react"),
    NewNote = require("./newnote"),
    Navbar = require("./navbar"), 
    Notes = require("./notes");

const Home = React.createClass({
    render: function(){
        return (
            <div className='home'>
                <Navbar />
                <div className="row">
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <Notes />
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-8">
                        <NewNote />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Home;