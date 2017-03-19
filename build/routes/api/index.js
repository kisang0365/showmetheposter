'use strict';

var router = require('express').Router();
var ad = require('./ad');
var list = require('./list');

router.get('/', function (req, res) {
    res.send('posts');
});

router.use('/ad', ad);
router.use('/list', list);

module.exports = router;