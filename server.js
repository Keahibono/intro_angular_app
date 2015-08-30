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
      release: 2015
    },
    {
      title: 'Godzilla 2000',
      release: 2000
    },
    {
      title: 'Pulp Fiction',
      release: 1993
    },
    {
      title: 'War Games',
      release: 1983
    }
  ]);
});

var server = app.listen(8080);