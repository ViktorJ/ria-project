'use strict';

let initialState = require('../initialstate'),
    C = require('../constants');

const NotesReducer = function (state, action) {
    switch (action.type) {
        case C.RECEIVE_NOTE:
            return Object.assign({}, state, {
                data: action.data
            });
        case C.BEGIN_EDIT_NOTE:
            console.log("BEGIN EDIT NOTE");
            return Object.assign({}, state, {noteCurrentlyBeingEdited: action.note});
        case C.END_EDIT_NOTE:
            return Object.assign({}, state, {noteCurrentlyBeingEdited: null});
        case C.NOTE_DETAILS:
            return Object.assign({}, state, {
                data: action.data
            });
        default:
            return state || initialState.notes;
    }
};

module.exports = NotesReducer;