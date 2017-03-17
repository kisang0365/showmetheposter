'use strict';

var AdItem = require('../../../models/ad');

exports.getList = function (req, res) {
  AdItem.find(function (err, ads) {
    if (err) return res.status(500).send({ error: 'database failure' });
    res.json(ads);
  });
};

exports.getItem = function (req, res) {
  AdItem.findOne({ _id: req.params.id }, function (err, ad) {
    if (err) return res.status(500).send({ error: 'database failure' });
    if (!product) return res.status(404).json({ error: 'item not found' });

    //조회수 처리 체크!!!!!!!!!
    ad.view = ad.view + 1;

    ad.save(function (err) {
      //if(err) res.status(500).json({error: 'failed to update'});
      if (err) console.log({ error: 'failed to update' });
      res.json({ ad: ad });
    });
  });
};

function isNumeric(x) {
  var reg = /^\d+$/;
  return reg.test(x);
}

function errorMessage(res) {
  res.send('<script type="text/javascript">alert("잘못된 접근입니다.");</script>');
  res.status(304).json("error");
}

exports.inputData = function (req, res) {
  var product = new AdItem();

  product.name = req.body.name;
  product.url = req.body.url;
  product.picUrl = req.body.picUrl;

  product.view = 0;

  product.expire = req.body.expired;

  if (req.body.inputTime == "undefined" || req.body.inputTime == undefined) {
    var date = new Date();

    var a = date.getFullYear() + "" + (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : "" + (date.getMonth() + 1)) + "";
    var b = date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();

    product.inputTime = a + b;
  } else {
    product.inputTime = req.body.inputTime;
  }

  if (product.expire == "undefined" || product.expire == undefined) {
    product.expire = "99999999";
  }

  product.save(function (err) {
    if (err) {
      console.error(err);
      res.json({ result: 0 });
      return;
    }
    res.json({ result: 1 });
  });
};