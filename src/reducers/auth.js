'use strict';

let initialState = require('../initialstate'),
    C = require('../constants');

const AuthReducer = function(state, action){
    switch(action.type){
        case C.ATTEMPT_LOGIN:
            return {
                current: C.AWAITING_AUTH,
                email: null,
                userId: null
            };
        case C.LOGIN_USER:
            return {
                current: C.LOGGED_IN,
                email: action.email,
                userId: action.uId
            };
        case C.LOGOUT:
            return {
                current: C.ANONYMOUS,
                email: null,
                userId: null
            };
        case C.REGISTER:
            return {
                current: C.ANONYMOUS,
                email: null,
                userId: null
            };
        default:
            return state || initialState.auth;
    }
};

module.exports = AuthReducer;