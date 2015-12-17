'use strict';

let C = require('../constants'),
    firebaseRef = new Firebase(C.FIREBASE_URL),
    notesRef = firebaseRef.child("notes");

module.exports = {
    submitNewNote: function(note){
        return function(dispatch, getState){
            let newNote = {
                user: userId,
                title: note.title,
                content: note.content
            };
            notesRef.push(newNote);
        }
    },
    viewNoteDetails: function(note){
        return function(dispatch, getState){
            dispatch({
                type: C.NOTE_DETAILS,
                data: {
                    user: note.user,
                    title: note.title,
                    content: note.content,
                    key: note.key
                }
            });
        }
    },
    loadNotes: function(){
        return function(dispatch, getState){
            let userId = firebaseRef.getAuth().uid;
            notesRef.on("value", function(snapshot){
                let noteArray = [];
                snapshot.forEach(function(note){
                    let noteData = note.val();
                    let key = note.key();
                    if(noteData.user === userId){
                        noteArray.push({
                            user: noteData.user,
                            title: noteData.title,
                            content: noteData.content,
                            key: key
                        });
                    }
                });
                dispatch({
                    type: C.RECEIVE_NOTE,
                    data: noteArray
                });
            });
        }
    }
};