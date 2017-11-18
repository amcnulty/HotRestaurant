var express = require('express');
var router = express.Router();
var path = require('path');
var Restaurant = require('../lib/restaurant');

var hotRestaurant = new Restaurant();

router.post('/reservation', function(req, res) {
    hotRestaurant.addParty(req.body);
    return res.status(200).send();
});

router.get('/tables', function(req, res) {
    res.send(hotRestaurant.getTables());
});

router.get('/waitingList', function(req, res) {
    res.send(hotRestaurant.getWaitList());
});

router.delete('/clearTable', function(req, res) {
    hotRestaurant.clearFields();
    return res.status(200).send();
});

module.exports = router;