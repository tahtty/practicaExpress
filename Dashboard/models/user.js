var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name:         {
                    type:     String,
                    required: true,
                    trim:     true
                  },
    created_at:   {
                    type:     Date,
                    required: false,
                    default:  Date.now
                  }
});

module.exports = mongoose.model('User', UserSchema);
