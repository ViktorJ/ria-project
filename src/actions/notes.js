'use strict';

let C = require('../constants'),
    firebaseRef = new Firebase(C.FIREBASE_URL),
    newNoteRef = firebaseRef.child("notes");

module.exports = {
    submitNewNote: function(note){
        return function(dispatch, getState){
            let userId = firebaseRef.getAuth().uid;
            
            let newNote = {
                user: userId,
                title: note.title,
                content: note.content
            };
            newNoteRef.push(newNote);
        }
    }
};