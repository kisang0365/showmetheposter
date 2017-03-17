'use strict';

var router = require('express').Router();
var ad = require('./ad');

router.get('/', function (req, res) {
    res.send('posts');
});

router.use('/ad', ad);

module.exports = router;