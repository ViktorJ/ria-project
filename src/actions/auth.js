'use strict';

let C = require('../constants'),
    firebaseRef = new Firebase(C.FIREBASE_URL);

module.exports = {
    listeningToAuth: function(){
        return function(dispatch, getState){
            firebaseRef.onAuth(function(authData){
                if(authData){
                    dispatch({
                        type: C.LOGIN_USER,
                        email: authData.password.email,
                        uId: authData.uid
                        
                    });
                }else {
                    if(getState().auth.current !== C.ANONYMOUS){
                        dispatch({type: C.LOGOUT});
                    }
                }
            });
        }
    },
    login: function(user){
        return function(dispatch, getState){
            dispatch({type: C.ATTEMPT_LOGIN});
           
            firebaseRef.authWithPassword(user, function(error, authData){
                 if (error) {
                    console.log("Login Failed!", error);
                    dispatch({type:C.LOGIN_FAIL});
                  } else {
                      console.log("Authenticated successfully with email: ", authData.password.email);
                  }
            }); 
        }
    },
    logout: function(){
        return function(dispatch, getState){
            dispatch({type:C.LOGOUT});
            firebaseRef.unauth();
        }
    },
    createUser: function(user){
        return function(dispatch, getState){
            dispatch({type:C.REGISTER});
            firebaseRef.createUser(user, function(error, userData) {
              if (error) {
                console.log("Error creating user:", error);
               dispatch({type:C.REGISTER_FAIL});
              } else {
                console.log("Successfully created user account with uid:", userData.uid);
                dispatch({type:C.REGISTER_SUCC});
              }
            });
        }
    }
};