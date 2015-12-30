"use strict";

let React = require("react"),
    ReactRedux = require("react-redux"),
    actions = require("../actions/actions"),
    C = require("../constants"),
    Link = require('react-router').Link;

const Notes = React.createClass({
    render: function () {
        let notes = this.props.notes.data;
        let user = this.props.auth.userId;
        let noteArray = [];
        let key = 0;

        let self = this;
        console.log(notes);
        if (notes) {
            notes.forEach(function (note) {
                if (note.user === user) {
                    noteArray.push(<div key={key} className="well"><Link to={"/note/" + note.key} key={key++}>
                        {note.title}
                    </Link><div> <Link to={"/home/edit/" + note.key} onClick={self.props.editNote.bind(self, note)}><i className="fa fa-pencil-square-o"></i></Link></div></div>);
                }
            });
        }

        return (
            <div className="notes">
                {notes ? noteArray.reverse() : <i className="fa fa-spinner fa-3x fa-spin"></i>}
            </div>
        );
        
    }
});

let mapStateToProps = function (state) {
    return {
        notes: state.notes,
        auth: state.auth
    };
};

let mapDispatchToProps = function (dispatch) {
    return {
        viewNoteDetails: function (note) {
            dispatch(actions.viewNoteDetails(note));
        },
        editNote: function (note) {
            console.log("Edit note clicked");
            dispatch(actions.beginEditNote(note));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Notes);