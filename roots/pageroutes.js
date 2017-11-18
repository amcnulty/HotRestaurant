var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, '../views/home.html'));
});

router.get('/tables', function(req, res) {
	res.sendFile(path.resolve(__dirname, '../views/tables.html'));
});

router.get('/reserve', function(req, res) {
	res.sendFile(path.resolve(__dirname, '../views/reserve.html'));
});

module.exports = router;