//Load modules
var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , mongoose = require('mongoose')  // mongoose
  , expressHbs = require('express3-handlebars') // handlebars
  , app = express()
  , Autoload = require('./autoload'); //autoload all the components

var morgan = require('morgan') // log every request to the console
  , cookieParser = require('cookie-parser') // read cookies (needed for auth)
  , bodyParser = require('body-parser'); // get information from html forms

var Components = new Autoload(app); //initiate all the components

//handlebars configuration
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
mongoose.connect('mongodb://localhost/test');

// pass passport for configuration
// require('./config/passport')(passport);

// some environment variables
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use("/assets", express.static(path.join(__dirname + '/assets')));

// set up our express application
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

// dynamically include routes (Controller)
fs.readdir('./controllers', function(err, files){
  if(err){
    console.log('no controllers');
    return;
  }
  files.forEach(function (file) {
    if(path.extname(file) == '.js') {
      route = require('./controllers/' + file);
      route(app, Components);
    }
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});