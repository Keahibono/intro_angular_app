var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
  res.render('index.html');
});

app.get('/api', function (req, res, next){
  res.json([
    {title: 'Spectre'},
    {title: 'Godzilla 2000'},
    {title: 'Pulp Fiction'}
  ]);
});

var server = app.listen(8080);