'use strict';

var router = require('express').Router();
var ad = require('./ad');

router.use('/ad', ad);

module.exports = router;