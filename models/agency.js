var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , agencySchema = new mongoose.Schema({
      name : String
    })
  , Agency = mongoose.model('Agency', agencySchema);

module.exports = Agency;