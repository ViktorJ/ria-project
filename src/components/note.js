"use strict"

let React = require("react"),
    ReactRedux = require('react-redux'),
    actions = require("../actions/actions"),
    Link = require('react-router').Link,
    Navbar = require('./navbar'),
    C = require("../constants");

const Note = React.createClass({
    componentWillMount: function(){
        
    },
    render: function(){
        let note = this.props.notes.data;
        return (
            <div className="noteDetails">
                <Navbar />
                <h1>{note.title}</h1>
                <div className="well">{note.content}</div>
                <Link to="/home"><button className="btn btn-default" onClick={this.props.loadNotes}><i className="fa fa-angle-double-left"></i> Back</button></Link>
            </div>
        );
    }
});

let mapStateToProps = function(state){
    return {
        notes:state.notes
    };
};

let mapDispatchToProps = function(dispatch){
    return {
        loadNotes: function(){
            dispatch(actions.loadNotes());
        }
    }
};


module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Note);