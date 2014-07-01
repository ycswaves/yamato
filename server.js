var express = require('express');
var app = express();

var expressHbs = require('express3-handlebars');

app.engine('html', expressHbs({
  extname:'html',
  defaultLayout:'main.html',
  helpers: {
    section: function(name, options){
        if(!this.section) this.section = {};
        this.section[name] = options.fn(this);
        return null;
    }
  }
}));
app.set('view engine', 'html');

app.use("/assets", express.static(__dirname + '/assets'));

app.get('/', function(req, res){
  res.render('landing/index');
});

app.get('/property', function(req, res){
  res.render('property/list');
});

console.log('app started');
app.listen(3000);