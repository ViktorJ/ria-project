"use strict";

let React = require("react"),
    ReactRedux = require("react-redux"),
    actions = require("../actions/actions"),
    C = require("../constants"),
    Link = require('react-router').Link;

const Notes = React.createClass({
    render: function () {
        let notes = this.props.notes.data;
        let noteArray = [];
        let key = 0;

        let self = this;
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

module.exports = ReactRedux.connect(mapStateToProps)(Notes);