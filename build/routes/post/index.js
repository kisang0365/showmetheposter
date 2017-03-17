'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = require('express').Router();


router.get('/', function (req, res) {
    res.send('posts');
});

router.get('/read/:id', function (req, res) {
    res.send('You are reading post ' + req.params.id);
});

router.get('/apl/adInput', function (req, res) {
    res.sendFile(_path2.default.join(__dirname, '..', '..', '..', 'public', 'index.html'));
});

module.exports = router;