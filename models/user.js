var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , userSchema = new mongoose.Schema({
      email        : String,
      password     : String,
      isAgent      : { type: Boolean,  default: false},
      isSubscribed : { type: Boolean,  default: false},
      token        : String,
      active       : { type: Boolean,  default: true},
      created      : { type: Date, default: Date.now},
      updated      : { type: Date, default: Date.now},
      profile      : {
        avatar   : String,
        fullName : String,
        phone    : String,
        qq       : Number,
        wechat   : String,
        about    : String,
        facebook : String,
        twitter  : String,
        google   : String
      }
    })
  , User = mongoose.model('User', userSchema);

module.exports = User;