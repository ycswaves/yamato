//load passport
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../models/user');

// expose this function to our app using module.exports
module.exports.Auth = function(app) {
    var check = function(req, res, next){
        console.log(1);
    }
};