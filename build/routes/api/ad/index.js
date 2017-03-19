'use strict';

var router = require('express').Router();
var controller = require('./ad.controller');

router.get('/list', controller.getList);
router.get('/:id', controller.getItem);

//router.post('/input', controller.inputData);
router.post('/input', function (req, res) {
   console.log("123");
});

module.exports = router;