'use strict';

let alertActions = require('./alert'),
    authActions = require('./auth');

module.exports = Object.assign({}, alertActions, authActions);
