'use strict';

let C = require("./constants");

module.exports = {
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
        notes: {data: {}}
    }
};