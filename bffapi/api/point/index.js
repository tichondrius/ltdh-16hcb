'use strict';

var express = require('express');
var controller = require('./point.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.post);

module.exports = router;
