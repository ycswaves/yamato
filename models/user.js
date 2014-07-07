var mongoose = require('mongoose')
  , bcrypt = require('bcrypt-nodejs')
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

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = User;