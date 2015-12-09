"use strict";

let React = require("react"),
    ReactRedux = require("react-redux"),
    actions = require("../actions/actions"),
    C = require("../constants");

const NewNote = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
         
        let note = {
            title: this.refs.noteTitle.value,
            content: this.refs.noteContent.value
        };
        
        this.props.submitNewNote(note);
        
        this.refs.noteTitle.value = "";
        this.refs.noteContent.value = "";
    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Note title</label>
                    <input type="text" className="form-control" ref="noteTitle"/>
                </div>
                <div className="form-group">
                    <label>Note</label>
                    <textarea className="form-control" rows="4" ref="noteContent"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
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
        submitNewNote: function(note){
            dispatch(actions.submitNewNote(note));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(NewNote);