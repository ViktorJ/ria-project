'use strict';

let initialState = require('../initialstate'),
    C = require('../constants');

const AlertReducer = function(state, action){
    let newState = Object.assign({}, state);
    switch(action.type){
        case C.INITIAL:
            return initialState.alert;
        case C.ALERT_SUCCESS:
            newState.alertClass = "alert alert-success";
            newState.alertMsg = action.msg;
            return newState;
        case C.ALERT_FAIL:
            newState.alertClass = "alert alert-danger";
            newState.alertMsg = action.msg;
            return newState;
        default:
            return state || initialState.alert;
    }
};

module.exports = AlertReducer;