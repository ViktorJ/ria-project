"use strict"

let React = require("react"),
    ReactRedux = require('react-redux'),
    actions = require("../actions/actions"),
    Link = require('react-router').Link,
    Navbar = require('./navbar'),
    C = require("../constants");

const Note = React.createClass({
    componentWillMount: function () {
        this.props.loadNotes();
    },
    getDefaultProps: function () {
        return {notes: {data: {title: "", content: ""}}};
    },
    render: function () {
        let note = this.props.notes.data.filter(function(n){
         return n.key == this.props.params.key;
         }.bind(this))[0];
        if (note) {
            return (
                <div className="noteDetails">
                    <Navbar />
                    <h1>{note.title}</h1>
                    <div className="well">{note.content}</div>
                    <Link to="/home">
                        <button className="btn btn-default" onClick={this.props.loadNotes}><i
                            className="fa fa-angle-double-left"></i> Back
                        </button>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="noteDetails">
                    <Navbar />
                    <h1>Missing the note data, please wait just a while longer</h1>
                </div>
            )
        }
    }
});

let mapStateToProps = function (state) {
    return {
        notes: state.notes
    };
};

let mapDispatchToProps = function (dispatch) {
    return {
        loadNotes: function () {
            dispatch(actions.loadNotes());
        }
    }
};


module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Note);