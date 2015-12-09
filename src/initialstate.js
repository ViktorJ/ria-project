'use strict';

let C = require("./constants");

module.exports = function(){
    return {
        alert: {
            alertClass: '',
            alertMsg: ''
        },
        auth: {
            current: C.ANONYMOUS,
            email: null,
            userId: null
        },
        notes: {
            user: null,
            title: null,
            content: null
        }
    }
};