"use strict"

let React = require("react"),
    ReactRedux = require('react-redux'),
    actions = require("../actions/actions"),
    Link = require('react-router').Link,
    Navbar = require('./navbar'),
    C = require("../constants");

const Note = React.createClass({
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
                        <button className="btn btn-default"><i
                            className="fa fa-angle-double-left"></i> Back
                        </button>
                    </Link>
                    <button className="btn btn-info"><i className="fa fa-pencil-square-o"></i> Edit</button>
                    <Link to="/home">
                        <button className="btn btn-danger"><i className="fa fa-trash"></i> Delete</button>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="noteDetails">
                    <Navbar />
                    <h1><i className="fa fa-spinner fa-3x fa-spin"></i></h1>
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
        deleteNote: function (key) {
            dispatch(actions.deleteNote(key));
        }
    }
};


module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Note);