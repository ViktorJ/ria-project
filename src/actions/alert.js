'use strict';

let C = require('../constants');

module.exports = {
    //alert actions
    initial: function(){
        return {type: C.INITIAL};
    },
    alertSuccess: function(msg){
        return {type: C.ALERT_SUCCESS,
                msg: msg};
    },
    alertFail: function(msg){
        return {type: C.ALERT_FAIL,
                msg: msg};
    }
};