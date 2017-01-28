interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "none",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      /*textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');*/
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate3d(' + x + 'px, ' + y + 'px,1000px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

//interact('.draggable').draggable(true);

interact("#desdrop,#inidrop,#findrop").dropzone({
  // only accept elements matching this CSS selector
  accept: '.draggable',
  // Require a 75% element overlap for a drop to be possible
  overlap: 'pointer',
  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    $(dropzoneElement).css("backgroundColor","grey");
    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    $(event.target).css("backgroundColor","white");
  },
  ondrop: function (event) {
    //event.relatedTarget.textContent = 'Dropped';
    dropzoneElement = event.target;
    $(dropzoneElement).css("backgroundColor","<white></white>");

    console.log(event.target)
    var obj = $(event.target).attr('id');
    console.log(obj);
    tarea = ($($(event.relatedTarget).children('p')[0]).html());
    editar(tarea,obj);
    proyecto = ($("#combo option:selected").html());
    iniciales();
    enDesarrollo();
    finalizado();
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
    
  }
});


function editar(tarea,estado) {
  url = '/api/tasks/'
  $.ajax({
    url: '/api/tasks/',
    type: 'GET',
    dataType: 'json',
    data: {param1: 'value1'},
  })
  .done(function(resp) {
     for (var i = 0; i < resp.length; i++) {
       if(resp[i].name ==tarea){
           $.ajax({
             url: '/api/tasks/'+resp[i]._id,
             type: 'PUT',
             dataType: 'json',
             data: {status: estado},
             
           })
           .done(function() {
             console.log("success");
           })
           .fail(function() {
             console.log("error");
           })
           .always(function() {
             console.log("complete");
           });
           
       }
     }
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  


  /*$.getJSON(url, {'estado': estado}, function(json, textStatus) {
      optional stuff to do after success 
  });*/
}