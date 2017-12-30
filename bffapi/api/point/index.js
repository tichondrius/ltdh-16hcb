'use strict';

var express = require('express');
var controller = require('./point.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.post);
router.post('/accept/:pointId', controller.carAccept);
router.post('/updateStatus/:pointId', controller.updateStatus);

module.exports = router;
