module.exports = function(app) {
/**
 * a home page route
 */
  app.get('/users/signup', function(req, res) {
      // any logic goes here
      res.render('users/signup')
  });

/**
 * About page route
 */
  app.get('/users/login', function(req, res) {
      // any logic goes here
      res.render('users/login')
  });

}