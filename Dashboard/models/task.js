var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TaskSchema   = new Schema({
    name:         {
                    type:     String,
                    required: true,
                    trim:     true
                  },
    description:  {
                    type:     String,
                    required: true,
                    trim:     true
                  },
    status:       {
                    type:     String,
                    enum:     ['Inicial', 'En Desarrollo', 'Finalizado']
                  },
    created_at:   {
                    type:     Date,
                    required: false,
                    default:  Date.now
                  }
});

module.exports = mongoose.model('Task', TaskSchema);
