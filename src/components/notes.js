"use strict";

let React = require("react"),
    C = require("../constants"),
    Link = require('react-router').Link;

const Notes = React.createClass({
    getInitialState: function(){
       return {notes: []};
    },
    componentWillMount: function(){
        let firebaseRef = new Firebase(C.FIREBASE_URL);
        let noteRef = firebaseRef.child("notes");
        
        noteRef.on("value", function(snapshot){
            let notes = [];
            
            snapshot.forEach(function(noteSnap){
                let note = noteSnap.val();
                note.key = noteSnap.key();
                notes.push(note);
            });
            
            this.setState({
                notes: notes
            });
        }.bind(this));
    },
    render: function(){
        return (
            <div className="notes">
                {this.state.notes.map(function(note) {
                    return <Link to="/note/:id" params={note.key} key={note.key}><div className="well" key={note.key}>{note.title}</div></Link>;
                })}
            </div>
        );
    }
});

module.exports = Notes;