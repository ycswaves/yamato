module.exports = function(app) {
/**
 * landing page
 */
  app.get('/', function(req, res){
    res.render('landing/index',{
        title: 'Make life easier'
    });
  });

}