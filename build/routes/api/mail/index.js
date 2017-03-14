'use strict';

var router = require('express').Router();
var controller = require('./mail.controller');

/*
    POST /api/mail/....
*/

router.post('/partnerSendMail', controller.sendPartner);
router.post('/opinionSendMail', controller.sendOpinion);

module.exports = router;