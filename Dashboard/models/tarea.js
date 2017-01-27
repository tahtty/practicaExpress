var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tareaSchema = new Schema({
	_idTarea : Number,
  nombre : String,
  descripcion :String,
  responsable :String,
  estado : String
});

mongoose.model('Tarea', tareaSchema);