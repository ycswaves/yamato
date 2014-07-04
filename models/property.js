var mongoose = require('mongoose')
  , Schema = mongoose.Schema

  , propertySchema = new mongoose.Schema({
      title: String,
      price: Number,
      room : Number,
      active  : Boolean,
      created : Date,
      updated : Date,
      details : {}
    })

  , Property = mongoose.model('Property', propertySchema);

module.exports = Property;