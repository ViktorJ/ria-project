"use strict";

let React = require("react"),
    C = require("../constants");

const newNote = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        
        this.firebaseRef = new Firebase(C.FIREBASE_URL);
        let newNoteRef = this.firebaseRef.child("notes");
        
        let userId = this.firebaseRef.getAuth().uid;
        
        newNoteRef.push({
            user: userId,
            title: this.refs.noteTitle.value,
            content: this.refs.noteContent.value
        });
        
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

module.exports = newNote;