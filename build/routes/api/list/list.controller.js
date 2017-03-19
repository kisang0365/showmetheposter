'use strict';

var AdItem = require('../../../models/ad');

function isNumeric(x) {
  var reg = /^\d+$/;
  return reg.test(x);
}

function errorMessage(res) {
  res.send('<script type="text/javascript">alert("잘못된 접근입니다.");</script>');
  res.status(304).json("error");
}
exports.getList = function (req, res) {
  var sortBy = req.params.sortBy;

  if (!isNumeric(req.params.page) || req.params.page < 0) {
    errorMessage(res);
  }
  var skipPage = (req.params.page - 1) * 12;

  var sortQuery = {};

  if (req.params.sortBy == "recentu") {
    sortQuery["inputTime"] = -1;
  } else if (req.params.sortBy == "recentd") {
    sortQuery["inputTime"] = 1;
  }

  var listPage = 1;

  AdItem.find().sort(sortQuery).count(function (err, page) {
    if (err) return handleError(err);
    listPage = Math.ceil(page / 12);

    AdItem.find().sort(sortQuery).skip(skipPage).limit(12).exec(function (err, ads) {
      if (err) return handleError(err);

      res.json({ ads: ads, "listPage": listPage });
    });
  });
};