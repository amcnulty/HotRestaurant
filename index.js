var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var bodyParser = require('body-parser');
require('dotenv').config();

var pageRoutes = require('./routes/pageRoutes');

var app = express();

app.set('views', path.join(__dirname, 'views'));

app.use(favicon(path.join(__dirname, 'public', 'res/icon/favicon.ico')));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/public')));

app.use('/', pageRoutes);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});



