var formOpts = require('../config/formOpts.js');
module.exports = function(app) {
/**
 * a property list
 */
  app.get('/properties', function(req, res){
    res.render('properties/list',{
	    title     : 'Property List',
	    bodyClass : 'page-sub-page page-listing-lines page-search-results',
      properties: getProperty()
    });
  });

  app.get('/properties/add', function(req, res){
    res.render('properties/add',{
      title     : 'Publish Property',
      bodyClass : 'page-sub-page page-submit',
      district  : formOpts.getDistrict()
    });
  });
}

function getProperty(){
  dummy = [{
    title:'blk486 帕尔马路',
    price: 800,
    apartmentType: 'HDB',
    roomType: '普通房',
    mrt: 'Braddle'
  },{
    title:'blk8 坎特贝利路',
    price: 1800,
    apartmentType: '公寓',
    roomType: '主人房',
    mrt: 'Seragoon'
  },{
    title:'blk248 墨菲场',
    price: 1200,
    apartmentType: '公寓',
    roomType: '普通房',
    mrt: 'Bishan'
  },{
    title:'blk12 布莱恩街',
    price: 680,
    apartmentType: 'HDB',
    roomType: '主人房',
    mrt: 'Bugis'
  },{
    title:'blk83 坎特贝利路',
    price: 1100,
    apartmentType: '公寓',
    roomType: '主人房',
    mrt: 'City Hall'
  },{
    title:'blk8 Rinehart',
    price: 1300,
    apartmentType: 'Condo',
    roomType: '主人房',
    mrt: 'Toa Payoh'
  },{
    title:'blk8 Tennessee Residence',
    price: 3900,
    apartmentType: '公寓',
    roomType: '整套',
    mrt: 'Toa Payoh'
  }];

  return dummy;
}