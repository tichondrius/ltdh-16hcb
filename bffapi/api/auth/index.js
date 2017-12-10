'use strict';

var express = require('express');
var controller = require('./auth.controller');

var router = express.Router();

router.post('/', controller.auth);

module.exports = router;
