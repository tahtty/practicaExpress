$(document).ready(function(){
		agregarProyecto();
		iniciales();
		enDesarrollo();
		finalizado();
    $("#crear").click(function(event) {
    /* Act on the event */
    var tit=$("#titulo").val();
    var desc=$("#descripcion").val();
    var respo=$("#responsable").val();
    /*enviar a la base*/
    console.log(tit);
    console.log(desc);
    console.log(respo);
  });
    $(".eliminar").click(function(event) {
      console.log(jQuery(this).parents("div")[0]);
      console.log(($(jQuery(this).parents("div")[0]).children('span'))[0].childNodes[0].nodeValue);
      $(jQuery(this).parents("div")[0]).remove();
    });
	});
	function agregarProyecto(){
		var op=document.createElement("option");
		$(op).html("Proyecto 1");
		$("#combo").append(op);
	}
	function iniciales(){
    var url = "#";//creo que se llamará a la función del modelo que tenga el query que saque de la base(?)

//$.getJSON(url,{tipo: tareas ,format:"json"} ,function(resp) {
  for (var i =0 ; i<1 /*resp.length*/; i++) {
      var div = document.createElement("div");
      var pi=document.createElement("p");
      var id=document.createElement("span");
      $(id).html("1");//id de la tarea en la base
      var sp=document.createElement("span");
      var btd=document.createElement("button");
      $(id).css('visibility', 'hidden');
      $(div).addClass('draggable');
      $(btd).addClass("btn btn-default");
      $(btd).addClass('eliminar');
      $(sp).addClass("glyphicon glyphicon-remove");
      $(pi).html("Tarea 1 ");//resp[i].titulo
      $(btd).append(sp);
      $(div).append(pi);
      $(div).append(btd);
      $(div).append(id);
      $("#tini").append(div);
    }
}//);}
	function enDesarrollo(){
  //$.getJSON(url,{tipo: tareas ,format:"json"} ,function(resp) {
  for (var i =0 ; i<1 /*resp.length*/; i++) {
		 var div = document.createElement("div");
      var pi=document.createElement("p");
      var id=document.createElement("span");
      $(id).html("2");//id de la tarea
      var sp=document.createElement("span");
      var btd=document.createElement("button")
      $(id).css('visibility', 'hidden');
      $(div).addClass('draggable');
      $(btd).addClass("btn btn-default");
      $(btd).addClass('eliminar');
      $(sp).addClass("glyphicon glyphicon-remove");
      $(pi).html("Tarea 2 ");//resp[i].titulo
       $(btd).append(sp);
      $(div).append(pi);
      $(div).append(btd);
      $(div).append(id);
      $("#tdes").append(div);
    }
	}//);}
	function finalizado(){
    //$.getJSON(url,{tipo: tareas ,format:"json"} ,function(resp) {
  for (var i =0 ; i<1 /*resp.length*/; i++) {
		var div = document.createElement("div");
      var pi=document.createElement("p");
      var id=document.createElement("span");
      $(id).html("3");//id de la tarea
      var sp=document.createElement("span");
      var btd=document.createElement("button");
      $(id).css('visibility', 'hidden');
      $(div).addClass('draggable');
      $(btd).addClass("btn btn-default");
      $(btd).addClass('eliminar');
      $(sp).addClass("glyphicon glyphicon-remove");
      $(pi).html("Tarea 3 ");//resp[i].titulo
       $(btd).append(sp);
      $(div).append(pi);
      $(div).append(btd);
      $(div).append(id);
      $("#tfin").append(div);
    }
	}//);}