"use strict"

let React = require("react"),
    C = require("../constants");

const Note = React.createClass({
    componentWillMount: function(){
        let key = this.props.params.id;
        console.log(key);
    },
    render: function(){
        return (
            <h1>Hej!</h1>
        );
    }
});

module.exports = Note;