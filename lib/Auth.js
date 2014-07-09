//load passport
var passport = require('passport')
  , flash = require('connect-flash')
  , session = require('express-session') //session handler
  , LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../models/user');

// expose this function to our app using module.exports
module.exports = function(app) {
    // required for passport
    app.use(session({ secret: 'thisisarandomsalttoencryptpassword' })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session

    this.check = function(){

    }

    this.signup = function(){

        
    }
};