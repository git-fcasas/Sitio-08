//Esperar que el DOM este listo 
$(document).ready(function () { 
  
  //Evento de tipo click 
  $(".toggle-btn").click(function() {   
    $(this).toggleClass("active");   
    $(".navbar-nav").toggleClass("active"); 
  });



});

//.toggle-btn === <div> 
//.navbar-nav === <ul> 