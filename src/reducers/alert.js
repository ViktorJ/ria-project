'use strict';

let initialState = require('../initialstate'),
    C = require('../constants');

const AlertReducer = function(state, action){
    let newState = Object.assign({}, state);
    switch(action.type){
        case C.INITIAL:
            return initialState.alert;
        case C.LOGIN_FAIL:
            newState.alertClass = "alert alert-danger";
            newState.alertMsg = "Login failed, please try again.";
            return newState;
        case C.REGISTER_SUCC:
            newState.alertClass = "alert alert-success";
            newState.alertMsg = "You have created a new account. Please go back and login.";
            return newState;
        case C.REGISTER_FAIL:
            newState.alertClass = "alert alert-danger";
            newState.alertMsg = "Something went wrong, please try again.";
            return newState;
        default:
            return state || initialState.alert;
    }
};

module.exports = AlertReducer;