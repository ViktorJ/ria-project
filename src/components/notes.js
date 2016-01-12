"use strict";

let React = require("react"),
    ReactRedux = require("react-redux"),
    actions = require("../actions/actions"),
    C = require("../constants"),
    Link = require('react-router').Link;

const Notes = React.createClass({
    renderNotes: function(){
        let notes = this.props.notes.data;
        let noteArray = [];
        let key = 0;

        if(this.props.auth.current === 'LOGGED_IN'){
            if (notes) {
                let user = this.props.auth.userId;
                notes.forEach(function (note) {
                    if(note.user === user){
                        noteArray.push(<div key={key} className="well"><Link to={"/note/" + note.key} key={key++}>
                            {note.title}
                        </Link></div>);
                    }
                });
            }
        }
        return noteArray.reverse();
    },
    render: function () {
        if(this.props.notes.data){
            return (
                <div className="notes">
                    {this.renderNotes()}
                </div>
            );
        } else {
            return (
                <div className="notes">
                   <i className="fa fa-spinner fa-3x fa-spin"></i>
                </div>
                );
        }
    }
});

let mapStateToProps = function (state) {
    return {
        notes: state.notes,
        auth: state.auth
    };
};

module.exports = ReactRedux.connect(mapStateToProps)(Notes);