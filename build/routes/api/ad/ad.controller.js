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