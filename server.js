var express = require('express');
var app = express();
var path = require('path');
var mock = require('./mock.json');

app.use('/', express.static('app'));
app.use('/bower_components', express.static('bower_components'));

app.get('/api/get_last_hour_users', function(req, res) {
  res.send(JSON.stringify(mock));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
