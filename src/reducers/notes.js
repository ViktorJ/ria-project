'use strict';

let initialState = require('../initialstate'),
    C = require('../constants');

const NotesReducer = function(state, action){
    switch(action.type){
        case C.NEW_NOTE:
            return {
                user: action.userId,
                title: action.title,
                content: action.content
            };
            default:
            return state || initialState().notes;
    }
}

module.exports = NotesReducer;