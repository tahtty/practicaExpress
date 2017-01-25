$(document).ready(function(){
		agregarProyecto();
		iniciales();
		enDesarrollo();
		finalizado();
    $("#crear").click(function(event) {
    /* Act on the event */
    var tit=$("#titulo input").val();
    var desc=$("#descripcion textarea").val();
    var respo=$("#responsable input").val();
    if (tit==""||desc==""||respo=="") {
      var spa=document.createElement("span");
      $(spa).html("Debe llenar todos los campos");
      $(spa).css('color', 'red');
      $("#myModal .modal-dialog .modal-content .modal-body").append(spa);
    }
    else{
    /*enviar a la base*/
    console.log(tit);
    console.log(desc);
    console.log(respo);
    $("body").removeClass('modal-open');
    $("#myModal").removeClass('in');
    $("#myModal").css('display', 'none');
    $(".modal-backdrop").remove();
  }
  });
    $("#si").click(function(event) {
      console.log($(".eliminar").parents("div.draggable").last());
      console.log(($($(".eliminar").parents("div.draggable").last())[0]));
      $($($(".eliminar").parents("div.draggable").last())[0]).remove();
      $("body").removeClass('modal-open');
    $("#elimModal").removeClass('in');
    $("#elimModal").css('display', 'none');
    $(".modal-backdrop").remove();
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
      $(btd).attr('data-toggle', 'modal');
      $(btd).attr('data-target', '#elimModal');
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