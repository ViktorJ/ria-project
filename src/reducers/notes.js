'use strict';

let initialState = require('../initialstate'),
    C = require('../constants');

const NotesReducer = function (state, action) {
    switch (action.type) {
        case C.RECEIVE_NOTE:
            return Object.assign({}, state, {
                data: action.data
            });
        default:
            return state || initialState.notes;
    }
};

module.exports = NotesReducer;