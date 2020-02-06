var path = require('path');
var exprees = require('express');
var bodyParser = require('body-parser');
var app = exprees();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function(req, res){
  res.render('index');

}).post('/api', bodyParser(), function(req, res){

  var a = req.body.a; 
  var b = req.body.b;
  var data = a + b; 
  res.json(data);
});

app.use(exprees.static(path.resolve(__dirname, 'public')));
app.listen(1337);



