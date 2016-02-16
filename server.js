var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static('app'));
app.use('/bower_components', express.static('bower_components'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
