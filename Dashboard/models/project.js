var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProjectSchema   = new Schema({
    listaDeTareas : {

                    type :[Number]
                    },

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

module.exports = mongoose.model('Project', ProjectSchema);
