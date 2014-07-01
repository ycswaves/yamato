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
  app.post('/users/signup', function(req, res) {
      // any logic goes here
      
  });

/**
 * login action
 */
  app.post('/users/login', function(req, res) {
      // any logic goes here
      res.render('users/login')
  });

}