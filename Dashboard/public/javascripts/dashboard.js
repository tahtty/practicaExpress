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
	});
	function agregarProyecto(){
		var op=document.createElement("option");
		$(op).html("Proyecto 1");
		$("#combo").append(op);
	}
	function iniciales(){
    var url = "#";//creo que se llamará a la función del modelo que tenga el query que saque de la base(?)

//$.getJSON(url,{tags: hashtag ,format:"json"} ,function(resp) {
  for (var i =0 ; i<1 /*resp.length*/; i++) {
      var div = document.createElement("div");
      div.classList.add('draggable')
      div.classList.add('drag-drop')
      var pi=document.createElement("p");
      var sp=document.createElement("span");
      var ep=document.createElement("span");
      var bte=document.createElement("button");
      var btd=document.createElement("button");
      $(sp).addClass("glyphicon glyphicon-remove");
      $(ep).addClass("glyphicon glyphicon-pencil");
      $(pi).html("Tarea 1");//resp[i]
      $(bte).append(ep);
      $(btd).append(sp);
      $(div).append(pi);
      $(div).append(bte);
      $(div).append(btd);
      $("#tini").append(div);
    }
}//);}
	function enDesarrollo(){
		var pd=document.createElement("p");
		$(pd).html("Tarea 2");
		$("#tdes").append(pd);
	}
	function finalizado(){
		var pf=document.createElement("p");
		$(pf).html("Tarea 3");
		$("#tfin").append(pf);
	}