//Load modules
var express = require('express')
      ,http = require('http')
      ,path = require('path')
      ,app  = express()
      ,fs   = require('fs');

//Load express handlebars
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

// database connection
// var expressmongoose = require('express-mongoose');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// some environment variables
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use("/assets", express.static(path.join(__dirname + '/assets')));

// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route(app);
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});