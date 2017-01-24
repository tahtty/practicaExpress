var mongoose = require('mongoose');
///base local
var url = 'mongodb://localhost:27017/proyectos';
//base remota en mlab
var urlx = 'mongodb://root:1234@ds127389.mlab.com:27389/proyectosdaw';

mongoose.connect(urlx);

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));

db.once('open', function () {
	console.log("Conexion exitosa!!");
});