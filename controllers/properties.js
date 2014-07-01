module.exports = function(app) {
/**
 * a property list
 */
  app.get('/properties', function(req, res){
    res.render('properties/list');
  });

}