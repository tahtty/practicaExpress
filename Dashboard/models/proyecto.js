var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var Tarea = mongose.model('Tarea');


var proyectoSchema = new Schema({
  _idProyecto : Number,
  nombre : String,
  listaDeTareas : [Number]
});

mongoose.model('Proyecto', proyectoSchema);