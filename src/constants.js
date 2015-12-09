'use strict';

module.exports = {
        FIREBASE_URL : 'https://sizzling-torch-6425.firebaseio.com',
    
        //alert actions
        INITIAL : 'INITIAL',
        LOGIN_FAIL : 'LOGIN_FAIL',
        REGISTER_SUCC : 'REGISTER_SUCC',
        REGISTER_FAIL : 'REGISTER_FAIL',
    
        //auth states
        ANONYMOUS: "ANONYMOUS",
        AWAITING_AUTH: "AWAITING_AUTH",
        LOGGED_IN: "LOGGED_IN",
        
        //auth actions
        ATTEMPT_LOGIN: "ATTEMPT_LOGIN",
        LOGIN_USER: "LOGIN_USER",
        LOGIN: "LOGIN",
        LOGOUT: "LOGOUT"
    
};