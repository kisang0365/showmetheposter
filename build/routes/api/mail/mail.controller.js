'use strict';

var _mail = require('./mail');

var _mail2 = _interopRequireDefault(_mail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.sendPartner = function (req, res) {
  var brand = req.param('brand');
  var email = req.param('email');
  var number = req.param('number');
  if (brand == null || brand == '' || email == null || email == '' || number == null || number == '') {
    console.log('empty value');
  } else {
    var partner = req.cookies.partners || 0;
    partner++;
    res.cookie('partners', partner, {
      maxAge: 1000 * 60 * 10
    });

    if (partner <= 6) {
      _mail2.default.partnerMail(brand, email, number);
      return res.redirect('/');
    }
  }
  return res.redirect('/partner'); // res.send('OK');
};

exports.sendOpinion = function (req, res) {
  var title = req.param('title');
  var content = req.param('content');

  if (title == null || title == '' || content == null || content == '') {
    console.log('empty value');
  } else {
    var enemy = req.cookies.enemys || 0;
    enemy++;
    res.cookie('enemys', enemy, {
      maxAge: 1000 * 60 * 10
    });
    if (enemy <= 6) {
      _mail2.default.opinionMail(title, content);
      return res.redirect('/');
    }
  }
  return res.redirect('/opinion');
};