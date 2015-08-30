var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
  res.render('index.html');
});

app.get('/api', function (req, res, next){
  res.json([
    {
      title: 'Spectre',
      year: 2015
    },
    {
      title: 'Godzilla 2000',
      year: 2000
    },
    {
      title: 'Pulp Fiction',
      year: 1993
    },
    {
      title: 'War Games',
      year: 1983
    }
  ]);
});

var server = app.listen(8080);