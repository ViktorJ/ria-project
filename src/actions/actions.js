'use strict';

let alertActions = require('./alert'),
    authActions = require('./auth'),
    notesActions = require('./notes');

module.exports = Object.assign({}, alertActions, authActions, notesActions);
