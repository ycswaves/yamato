var fs = require('fs')
  , path = require('path');
// dynamically include components
module.exports = function(app) {
  var current = this;
  // dynamically include routes (Controller)
  fs.readdirSync('./lib').forEach(function (file) {
    if(path.extname(file) == '.js') {
      var $FnName = path.basename(file,'.js')
      var Component = require('./lib/' + file);
      current[$FnName] = new Component(app);
    }
  });
}