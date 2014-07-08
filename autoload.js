module.exports = function(app) {
  // dynamically include components
  fs.readdir('./lib', function(err, files){
    if(err){ 
      console.log('no components found');
    }
    files.forEach(function (file) {
      if(path.extname(file) == '.js') {
        component = require('./lib/' + file);
        component(app);
      }
    });
  });
}