'use strict';

let C = require('../constants'),
    firebaseRef = new Firebase(C.FIREBASE_URL),
    notesRef = firebaseRef.child("notes");

module.exports = {
    submitNewNote: function(note){
        return function(dispatch, getState){
            let userId = getState().auth.userId;
            let newNote = {
                user: userId,
                title: note.title,
                content: note.content
            };
            notesRef.push(newNote);
        }
    },
    submitEditNote: function(note){
        return function(dispatch, getState){
            notesRef.child(note.key).update({title: note.title, content: note.content});
        }
    },
    listeningToNotes: function(){
        return function(dispatch, getState){
            notesRef.on("value", function(snapshot){
                let noteArray = [];
                snapshot.forEach(function(note){
                    let noteData = note.val();
                    let key = note.key();
                        noteArray.push({
                            user: noteData.user,
                            title: noteData.title,
                            content: noteData.content,
                            key: key
                        });
                });
                dispatch({
                    type: C.RECEIVE_NOTE,
                    data: noteArray
                });
            });
        }
    }
};