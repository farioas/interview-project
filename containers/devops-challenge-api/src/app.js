var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

var dbHost = process.env.DB_HOST || 'localhost';
var dbPort = process.env.DB_PORT || 27017;
var dbName = process.env.DB_NAME || 'test';
mongoose.connect(['mongodb://', dbHost, ':', dbPort, '/', dbName].join(''));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB connected');
});

var requestSchema = mongoose.Schema({
  time: { type: Date, default: Date.now }
});
var Request = mongoose.model('Request', requestSchema);

app.use(cors());

app.get('/challenge', function(req, res, next) {
  var request = new Request({ time: new Date() });
  request.save(function (err) {
    if (err) return console.error(err);
    console.log('Request saved');

    Request.find(function (err, requests) {
      if (err) return console.error(err);
      console.log('Return list of requests', requests);

      res.json({ challengeRequests: requests });
    });
  });
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('CORS-enabled web server listening on port ' + port);
});
