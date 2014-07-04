var User = require('../models/user');
module.exports = function(app) {
/**
 * user profile page
 */
  app.get('/users/profile', function(req, res){
    res.render('users/profile',{
			title			: 'My Profile',
			bodyClass : 'page-sub-page page-profile page-account'
    });
  });
/**
 * sign up action
 */
  app.get('/users/signup', function(req, res) {
    // any logic goes here
    var user = new User({ 
      username : 'guanhao', 
      password : 'testing' 
    }); 
    user.save(); 
    res.send('Data inited'); 
  });

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