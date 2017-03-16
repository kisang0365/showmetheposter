'use strict';

var router = require('express').Router();

router.get('/', function (req, res) {
    res.send('posts');
});

module.exports = router;