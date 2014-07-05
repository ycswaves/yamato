module.exports = function(app) {
/**
 * landing page
 */
  app.get('/', function(req, res){
    res.render('landing/index',{
      title     	: '一切与家有关',
      bodyClass 	: 'page-homepage navigation-fixed-top page-slider horizontal-search-float',
      sectionClass: 'welcome'
    });
  });

}