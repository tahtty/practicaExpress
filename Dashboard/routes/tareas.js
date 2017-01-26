//var Tarea = require('server').model('Tarea');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/tareas/nueva', function(req, res, next) {

	console.log('POST');
    console.log(req.body);
	var tarea1 = new Tarea({
		idTarea : 1,
  		nombre : "Documentacion",
  		descripcion :"Levantar informacion",
  		responsable :"Israel Zurita",
  		estado : "Inicial"
	});
  db.collection('Tarea').save(tarea1,function(err) {
  	 if (err) return console.log(err)
  	 console.log('saved to database')
    
  });
  res.redirect('/');
});

module.exports = router;
