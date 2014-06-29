var express = require('express');
var app = express();

var expressHbs = require('express3-handlebars');

app.engine('html', expressHbs({extname:'html', defaultLayout:'main.html'}));
app.set('view engine', 'html');

app.use("/assets", express.static(__dirname + '/assets'));

app.get('/', function(req, res){
  res.render('partials/property-list');
});

console.log('app started');
app.listen(3000);