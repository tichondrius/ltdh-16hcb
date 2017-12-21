'use strict';

var express = require('express');
var controller = require('./car.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.patch('/:carId', controller.update);

module.exports = router;
