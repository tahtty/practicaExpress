var mongoose = require('mongoose');
///base local
var url = 'mongodb://localhost:27017/proyectos';
//base remota en mlab
var urlx = 'mongodb://root:1234@ds127389.mlab.com:27389/proyectosdaw';

var urlz = 'mongodb://root:1234@ds131099.mlab.com:31099/proyectos';

module.exports = function(){
  var db = mongoose.connect('mongodb://root:1234@ds131099.mlab.com:31099/proyectos', function(err){
    if (err) {
      console.log("Error de Conexión");
    } else {
      console.log("Conexión establecida");
    }
  });

  //definir los modelos
  require('./models/tarea');
  require('./models/proyecto');
  
  return db;
};