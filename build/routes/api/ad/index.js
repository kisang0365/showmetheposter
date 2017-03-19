'use strict';

var router = require('express').Router();
var controller = require('./ad.controller');

router.get('/list', controller.getList);
router.get('/:id', controller.getItem);

router.post('/input', controller.inputData);

module.exports = router;