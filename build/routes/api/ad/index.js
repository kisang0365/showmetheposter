'use strict';

var router = require('express').Router();
var controller = require('./ad.controller');

router.get('/list', controller.getList);
router.get('/:id', controller.getItem);

module.exports = router;