$(document).ready(function(){
  console.log('al menos hago esto')
    $("#combo").change(function(event) {
      var cambio=$(this).val();
      console.log(cambio);
      inicialesc(cambio);
      enDesarrolloc(cambio);
      console.log('llego hasta aqui');
      finalizadoc(cambio);
    });
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
    $(".eliminar").click(function(event){
      console.log(jQuery(this).parents("div")[0]);
      console.log(($(jQuery(this).parents("div")[0]).children('span'))[0].childNodes[0].nodeValue);
      var id=($(jQuery(this).parents("div")[0]).children('span'))[0].childNodes[0].nodeValue;
      $("#idd").html(id);
    });
    $("#si").click(function(event) {
      console.log($("#idd"));
      var id=$("#idd").html();
      console.log(id);
      /*$.getJSON(url,{tipo: tareas,"id": id,format:"json"} ,function(resp) { url para eliminar de la base
        usar id que agarra el id de la tarea*/
        iniciales();
        enDesarrollo();
      //}
      $("body").removeClass('modal-open');
    $("#elimModal").removeClass('in');
    $("#elimModal").css('display', 'none');
    $(".modal-backdrop").remove();
    });
	});
	function agregarProyecto(){
    /*$.getJSON(url,{tipo: proyectos,id: 1,format:"json"} ,function(resp) {} id del primer proyecto que es el default*/
		var op=document.createElement("option");
    var op2=document.createElement("option");
		$(op).html("Proyecto 1");
    $(op2).html("Proyecto 2");
		$("#combo").append(op);
    $("#combo").append(op2);
	}
	function iniciales(){
    $("#tini").empty();
    console.log('gotta gotta work.work,work,work... Gotta work!');
    var url = "#";//creo que se llamará a la función del modelo que tenga el query que saque de la base(?)

//en el json sacar del proyecto 1
//$.getJSON(url,{tipo: tareas ,format:"json"} ,function(resp) {
  for (var i =0 ; i<1 /*resp.length*/; i++) {
      var div = document.createElement("div");
      var pi=document.createElement("p");
      var id=document.createElement("span");
      $(id).html("5");//id de la tarea en la base
      var sp=document.createElement("span");
      var btd=document.createElement("button");
      $(id).css('visibility', 'hidden');
      $(div).addClass('draggable');
      $(btd).addClass("btn btn-default");
      $(btd).addClass("eliminar");
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
function inicialesc(c){
  $("#tini").empty();
  //$.getJSON(url,{tipo: tareas,proyecto: c ,format:"json"} ,function(resp) {//Este saca del proyecto especificado(se ha pasado el contenido html de la opción a la que se cambió)
    for (var i =0 ; i<1 /*resp.length*/; i++) {
      var div = document.createElement("div");
      var pi=document.createElement("p");
      var id=document.createElement("span");
      $(id).html("5");//id de la tarea en la base
      var sp=document.createElement("span");
      var btd=document.createElement("button");
      $(id).css('visibility', 'hidden');
      $(div).addClass('draggable');
      $(btd).addClass("btn btn-default");
      $(btd).addClass("eliminar");
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
    $("#tdes").empty();
    console.log('gotta gotta work.work,work,work... Gotta work!');
    //en el json sacar del proyecto 1
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
      $(btd).attr('data-toggle', 'modal');
      $(btd).attr('data-target', '#elimModal');
      $(sp).addClass("glyphicon glyphicon-remove");
      $(pi).html("Tarea 2 ");//resp[i].titulo
       $(btd).append(sp);
      $(div).append(pi);
      $(div).append(btd);
      $(div).append(id);
      $("#tdes").append(div);
    }
	}//);}
  function enDesarrolloc(c){
    $("#tdes").empty();
    //$.getJSON(url,{tipo: tareas,proyecto: c ,format:"json"} ,function(resp) {Este saca del proyecto especificado(se ha pasado el contenido html de la opción a la que se cambió)
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
      $(btd).attr('data-toggle', 'modal');
      $(btd).attr('data-target', '#elimModal');
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
    console.log('entro1');
    $("#tfin").empty();
    //en el json sacar del proyecto 1
    //$.getJSON(url,{tipo: tareas ,format:"json"} ,function(resp) {
  for (var i =0 ; i<1 /*resp.length*/; i++) {
    console.log('entro2');
    var div = document.createElement("div");
      var pi=document.createElement("p");
      var id=document.createElement("span");
      $(id).html("3");//id de la tarea
      $(id).css('visibility', 'hidden');
      $(div).addClass('draggable');
      $(pi).html("Tarea 3 ");//resp[i].titulo
      $(div).append(pi);
      $(div).append(id);
      $("#tfin").append(div);
      console.log('finalizo');
    }
  }//);}
   function finalizadoc(c){
    $("#tfin").empty();
    //$.getJSON(url,{tipo: tareas,proyecto: c ,format:"json"} ,function(resp) {Este saca del proyecto especificado(se ha pasado el contenido html de la opción a la que se cambió)
      for (var i =0 ; i<1 /*resp.length*/; i++) {
    var div = document.createElement("div");
      var pi=document.createElement("p");
      var id=document.createElement("span");
      $(id).html("3");//id de la tarea
      $(id).css('visibility', 'hidden');
      $(div).addClass('draggable');
      $(pi).html("Tarea 3 ");//resp[i].titulo
      $(div).append(pi);
      $(div).append(id);
      $("#tfin").append(div);
    }
  }//);}

	function finalizado(){
    console.log('entro1');
    $("#tfin").empty();
    //en el json sacar del proyecto 1
    //$.getJSON(url,{tipo: tareas ,format:"json"} ,function(resp) {
  for (var i =0 ; i<1 /*resp.length*/; i++) {
    console.log('entro2');
		var div = document.createElement("div");
      var pi=document.createElement("p");
      var id=document.createElement("span");
      $(id).html("3");//id de la tarea
      $(id).css('visibility', 'hidden');
      $(div).addClass('draggable');
      $(pi).html("Tarea 3 ");//resp[i].titulo
      $(div).append(pi);
      $(div).append(id);
      $("#tfin").append(div);
      console.log('finalizo');
    }
	}//);}