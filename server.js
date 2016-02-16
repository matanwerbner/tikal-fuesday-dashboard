var express = require('express');
var app = express();
var path = require('path');
var mock = require('./mock.json');
var request = require('request');

app.use('/', express.static('app'));
app.use('/bower_components', express.static('bower_components'));

function getTimestamp(){
  var currentTime = new Date().getTime();
  return currentTime - (currentTime % (60*60*1000));
}

var webdisUrl = 'http://10.0.0.4:7379';

app.get('/api/get_last_hour_users', function(req, res) {

  var newUrl = webdisUrl + '/HGETALL/users_' + getTimestamp();
  request(newUrl).pipe(res);
});

app.get('/api/get_last_hour_channels', function(req, res) {
  var newUrl = webdisUrl + '/HGETALL/channels_' + getTimestamp();
  request(newUrl).pipe(res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
