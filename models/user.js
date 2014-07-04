var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , userSchema = new mongoose.Schema({
      username: String,
      password: String,
      token   : String,
      active  : Boolean,
      created : Date,
      updated : Date,
      profile : [{
        firstName : String,
        lastName  : String
      }]
    })
  , User = mongoose.model('User', userSchema);

module.exports = User;