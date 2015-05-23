var express = require('express')
  , webhook = require('express-ifttt-webhook');

var app = express();
app.set('port', 8080);

app.use(webhook(function(json,done){
    console.log(json);
    json.url = json.categories.string;
    done(null,json);
}));

var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port', server.address().port);
});