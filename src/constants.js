'use strict';

module.exports = {
        FIREBASE_URL : 'https://sizzling-torch-6425.firebaseio.com',
    
        //alert actions
        INITIAL : 'INITIAL',
        LOGIN_FAIL : 'LOGIN_FAIL',
        REGISTER_SUCC : 'REGISTER_SUCC',
        REGISTER_FAIL : 'REGISTER_FAIL',
        ALERT_SUCCESS : 'ALERT_SUCCESS',
        ALERT_FAIL : 'ALERT_FAIL',
    
        //auth states
        ANONYMOUS: "ANONYMOUS",
        AWAITING_AUTH: "AWAITING_AUTH",
        LOGGED_IN: "LOGGED_IN",
        
        //auth actions
        ATTEMPT_LOGIN: "ATTEMPT_LOGIN",
        LOGIN_USER: "LOGIN_USER",
        LOGIN: "LOGIN",
        LOGOUT: "LOGOUT",
        REGISTER: "REGISTER",
    
        //note actions
        NEW_NOTE: "NEW_NOTE",
        LIST_NOTES: "LIST_NOTES",
        RECEIVE_NOTE: "RECEIVE_NOTE",
        NOTE_DETAILS: "NOTE_DETAILS",
        BEGIN_EDIT_NOTE: "BEGIN_EDIT_NOTE",
        END_EDIT_NOTE: "END_EDIT_NOTE"
    
};