"use strict";

let React = require("react"),
    ReactRedux = require("react-redux"),
    actions = require("../actions/actions"),
    C = require("../constants"),
    Link = require('react-router').Link;

const Notes = React.createClass({
    handleClick: function(note){
        this.props.viewNoteDetails(note);
    },
    render: function(){ 
        let notes = this.props.notes.data;
        let user = this.props.auth.userId;
        let noteArray = [];
        let key = 0;
        
        let self = this;
        if(notes){
            notes.forEach(function(data){
                if(data.user === user){
                    noteArray.push(<Link to="/note" key={key++}><div key={data.key} className="well" onClick={self.handleClick.bind(self, data)}>{data.title}</div></Link>);        
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

let mapStateToProps = function(state){
    return {
        notes:state.notes,
        auth:state.auth
    };
};

let mapDispatchToProps = function(dispatch){
    return {
        viewNoteDetails: function(note){
            dispatch(actions.viewNoteDetails(note));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Notes);