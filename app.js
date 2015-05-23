var express = require('express');
var webhook = require('express-ifttt-webhook');

var request = require('request');

var app = express();
var port = process.env.PORT || 8080
app.set('port', port);

app.use(webhook(function(json,done){
  console.log(json);
  request.post({
    url: json.categories.string,
    headers: {"Content-Type": "application/json"},
    json: json.description
  },function (error, response, body) {
    if (error || response.statusCode != 200){
      console.log(response.statusCode, body);
    }
  });
}));

var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port:', server.address().port);
});