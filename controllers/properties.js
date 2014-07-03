module.exports = function(app) {
/**
 * a property list
 */
  app.get('/properties', function(req, res){
    res.render('properties/list',{
			title			: 'Property List',
			bodyClass : 'page-sub-page page-listing-lines page-search-results'
    });
  });
}