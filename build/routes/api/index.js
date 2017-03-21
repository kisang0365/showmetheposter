'use strict';

var router = require('express').Router();
var ad = require('./ad');
var list = require('./list');
var mail = require('./mail');

router.get('/', function (req, res) {
    res.send('posts');
});

router.use('/ad', ad);
router.use('/list', list);
router.use('/mail', mail);

module.exports = router;