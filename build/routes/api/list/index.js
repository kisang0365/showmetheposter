'use strict';

var router = require('express').Router();
var controller = require('./list.controller');

/*
    GET /api/list/....
*/

router.get('/:sortBy/:page', controller.getList);

module.exports = router;