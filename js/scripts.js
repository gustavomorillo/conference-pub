$(document).ready(function() {
  $("#demo1 h1").lettering();
  console.log("yew");
});


$(function() {
  'use strict';



console.log('ready for the action');


//$('nav.menu-programa a:first').next().on('click', mostrar);

//function mostrar()  {
//$('#conferencias').show();
//}



$('#dias').countdown('2020/10/10', function(event) {
  $(this).html(event.strftime('%D'));
});
$('#horas').countdown('2020/10/10', function(event) {
  $(this).html(event.strftime('%H'));
});
$('#minutos').countdown('2020/10/10', function(event) {
  $(this).html(event.strftime('%M'));
});
$('#segundos').countdown('2020/10/10', function(event) {
  $(this).html(event.strftime('%S'));
});




//$(".ocultar").hide();
/*
  $('div.nuestros-servicios div:first').show();
  $('div.servicios nav a:first').addClass('activo');

  $('.servicios nav a').on('click', mostrarTabs);

function mostrarTabs()  {
  $('.servicios nav a').removeClass('activo');
  $(this).addClass('activo');
  var enlace = $(this).attr('href');
  $('div.nuestros-servicios div').hide();
  $(enlace).show();
  return false;

}




/*

  $('div.servicios nav a:first').on('click', primero);

  function primero () {
    $('div.servicios nav a:first').next().removeClass('activo');
    $('div.nuestros-servicios div:first').next().hide();

    $('div.servicios nav a:last').removeClass('activo');
    $('div.nuestros-servicios div:last').hide();

    $(this).addClass('activo');
    $('div.nuestros-servicios div:first').show();
    return false;




  }





  $('div.servicios nav a:first').next().on('click', segundo);

  function segundo () {
    $('div.servicios nav a:first').removeClass('activo');
    $('div.servicios nav a:last').removeClass('activo');
    $(this).addClass('activo');
    $('div.nuestros-servicios div:first').hide();
    $('div.nuestros-servicios div:last').hide();
    $('div.nuestros-servicios div:first').next().show();

  }

  $('div.servicios nav a:last').on('click', tercero);

  function tercero () {
      $('div.servicios nav a:first').removeClass('activo');
      $('div.servicios nav a:first').next().removeClass('activo')
      $('div.nuestros-servicios div:first').hide();
        $('div.nuestros-servicios div:first').next().hide();
        $('div.nuestros-servicios div:last').show();
        $(this).addClass('activo');
};

  //$('#viajes').css({'background-color':'#db008d', 'color':'white'});
/*

    $('#navegacion').show();



var viajesporfecha = {
  primero:'Londres',
  segundo:'Valencia',
  tercero:'Madrid',
  cuarto:'Paris',
  quinto:'Milan'
}
$.each(viajesporfecha, function(i, v){
$('aside').append('<li>' + i +' - ' + v + '</li>');


})

console.log(viajesporfecha);


var proximosviajes = ['Londres', 'Valencia', 'Madrid', 'Paris', 'Milan'];
console.log(proximosviajes);

$.each(proximosviajes, function(i, v) {

    if (i == 0) {
      $('aside').append('<h2> Proximos Viajes</h2>');
    }
      $('aside').append('<li>' + v +'</li>');

});



/*

$('aside').load('promo.html');

/*

$('.logo img').on('click', function() {
  $('main article:first').slideUp(1000);
});

$('aside').click(function ()  {
$('main article:first').slideDown(1000);



});








/*

$('article img:first').on('mouseenter', aumentarImagen );
$('article img:first').on('mouseleave', disminuirImagen);

function aumentarImagen ()  {
  $(this).animate({'width':'100%'})
}

function disminuirImagen () {
  $(this).animate({'width':'350px'});
}



/*

      $('.logo img').on('click', animacion);
      function animacion()  {
        $(this).animate({'width':'100px'}, 1000);

      }





/*
      $('.navegacion ul li a').on('mouseenter', cambiarcolor);

      function cambiarcolor()   {
        $('.navegacion').css('background-color','red');



      }





/*
    $('.logo img').css({width:'100px'});

    $('aside').css({'background-color':'grey',
                  'color':'yellow',
                  'text-transform':'uppercase'});




/*


    $('article:first img').on('click', function(){

      $(this).attr('src', 'img/imagen_2.jpg');


    });




/*
$('main').on ({
    click: function() {
      $(this).addClass('fondorojo activo');
    }, mouseenter: function()  {
      $(this).addClass('fondorojo');
    }, mouseleave: function()  {
      $(this).addClass('activo');
    }


  });




/*


$('main article:first').addClass("activo");

$('.navegacion ul li a').on('click', function(e) {
  $('.navegacion ul li a').removeClass("activo");
  e.preventDefault();

$(this).addClass("activo");



});


/*
$('#menu').on('click', function(){

  $('#navegacion').show();


});



/*

$('div.logo img').on('mouseenter', function() {

    $(this).remove();


});




/*
$('div.logo img').on('click', function() {

console.log('Has hecho click TIO');
});



/*
$('main article:first').hide();
var x = $('main article:last').clone();
//$('main').prepend(x);
$(x).appendTo('main');
*/


});
