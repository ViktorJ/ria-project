'use strict';

let C = require('../constants');

module.exports = {
    //alert actions
    initial: function(){
        return {type: C.INITIAL};
    },
    alertLoginFail: function(){
        return {type: C.LOGIN_FAIL};
    },
    alertRegisterSucc: function(){
        return {type: C.REGISTER_SUCC};
    },
    alertRegisterFail: function(){
        return {type: C.REGISTER_FAIL};
    }
};