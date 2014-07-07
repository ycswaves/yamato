var User = require('../models/user');
module.exports = function(app, passport) {
/**
 * user profile page
 */
  app.get('/users/profile', isLoggedIn, function(req, res){
    res.render('users/profile',{
			title			: 'My Profile',
			bodyClass : 'page-sub-page page-profile page-account',
      profile   : getProfile()
    });
  });
/**
 * sign up action
 */
  app.post('/users/signup', passport.authenticate('local-signup', {
    successRedirect : '/users/profile', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

/**
 * login action
 */
  app.post('/users/login', function(req, res) {
    // any logic goes here
    res.render('users/login')
  });

/**
 * list all
 */
  app.get('/users', function(req, res) {
    User.find(function(err, doc) { 
      res.json(doc); 
    });
  });
} 

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated()){
    return next();
  }

  // if they aren't redirect them to the home page
  res.redirect('/');
}

function getProfile(){
  dummy = {
    email   : 'daven.shen@gmail.com',
    isAgent : true,
    profile : {
      avatar   : 'http://img1.wikia.nocookie.net/__cb20121226220154/onepiece/images/archive/e/e6/20130714224604!Luffy_Wax.png',
      fullName : 'Guanhao Shen',
      phone    : '+65 96343132',
      qq       : '87573844',
      wechat   : 'guanhao_shen',
      about    : '这家伙很懒，什么都没留下',
      facebook : '',
      twitter  : '',
      google   : ''
    }
  };

  return dummy;
}