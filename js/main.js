(function()  {
  "use strict";

    var barraAltura = $('.barra').innerHeight();
    console.log(barraAltura + ' altura barra');

    var windowh= $(window).height();
    console.log(windowh + ' alltura de la ventana');

    $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > windowh) {
      console.log("ya has rebasado la altura de la ventana");
      $('.barra').addClass('fixed');
    $('body').css({'margin-top': barraAltura + 'px'});
    } else {
        $('.barra').removeClass('fixed');
      $('body').css({'margin-top':'0px'});
      console.log("aún no has rebasado la altura de la ventana");
    }


    });

    $('.menu-movil').on('click', function() {
      $('.navegacion-principal').slideToggle();

    });



  $('#talleres').show();
  $('nav.menu-programa a:first').addClass('activo');
  $('nav.menu-programa a').on('click', mostrarTabs);


  function mostrarTabs () {
  $('nav.menu-programa a').removeClass('activo');
  $(this).addClass('activo');
  $('.ocultar').hide();
  var enlace = $(this).attr('href');
  $(enlace).fadeIn(1000);
  return false;

  }

    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function(){

      var waypoint = new Waypoint({
        element: document.getElementsByClassName('resumen-evento'),
        handler: function() {

          $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6},1200);
          $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15},1200);
          $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3},1200);
          $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9},1200);

        }, offset:'60%'
      })


      if (document.getElementById('mapa')) {


            var map = L.map('mapa').setView([10.493171, -66.838675], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([10.493171, -66.838675]).addTo(map)
                .bindPopup('Un parquesito maravilloso.')
                .openPopup();
      } else

        // campos Datos usuarios

        if (document.getElementById('calcular')) {
          var nombre = document.getElementById('nombre');
          var apellido = document.getElementById('apellido');
          var email = document.getElementById('email');

          // campos pases

          var pase_dia = document.getElementById('pase_dia');
          var pase_dosdias = document.getElementById('pase_dosdias');
          var pase_completo = document.getElementById('pase_completo');


          // Botonos y divs

          var calcular = document.getElementById('calcular');
          var errorDiv = document.getElementById('error');
          var botonRegistro = document.getElementById('btnRegistro');
          var lista_productos = document.getElementById('lista-productos');
          var suma = document.getElementById('suma-total');



          var etiquetas = document.getElementById('etiquetas');
          var camisas = document.getElementById('camisa_evento');




  /*
          if (pase_dosdias.value == 0 && pase_completo.value == 0) {
            sabado.style.display = "none";
            domingo.style.display = "none";
            console.log("Ocultar display domingo y sabado");

          } else {
            sabado.style.display = "block";
            domingo.style.display = "block";
          }
  */
          calcular.addEventListener('click', calcularMontos);

          pase_dia.addEventListener('blur', mostrarDias);
          pase_dosdias.addEventListener('blur', mostrarDias);
          pase_completo.addEventListener('blur', mostrarDias);

          nombre.addEventListener('blur', validarCampos);
          apellido.addEventListener('blur', validarCampos);
          email.addEventListener('blur', validarCampos);
          email.addEventListener('blur', validarEmail);


          function validarCampos() {
            if (this.value == '') {
              errorDiv.style.display = 'block';
              errorDiv.innerHTML = 'Este campo es obligatorio';
              this.style.border = '2px solid red';
              errorDiv.style.border = '2px solid red';
            } else {
              errorDiv.style.display = 'none';
              this.style.border = '1px solid black';
            }
          };

          function validarEmail ()  {
            if (this.value.indexOf('@') > -1) {
              errorDiv.style.display = 'none';
              this.style.border = '1px solid #cccccc';
            } else errorDiv.style.display = 'block';
              errorDiv.innerHTML = 'Debe introducir un @';
              this.style.border = '2px solid red';
              errorDiv.style.border = '2px solid red';

          };






  //      function (validarEmail) {
    //      if (this.value.indexOf('@')) {

      //    }


    //    }


            function calcularMontos(event){




              if (regalo.value === '')  {
                alert('Debes elegir un regalo');
                regalo.focus();
              } else {
                console.log('ya elegiste regalo');

                      var boletoDia = parseInt(pase_dia.value, 10)|| 0,
                          boleto2Dias = parseInt(pase_dosdias.value, 10)|| 0,
                          boletoCompleto = parseInt(pase_completo.value, 10)|| 0,
                          cantCamisas = parseInt(camisas.value, 10)|| 0,
                          cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;

                  console.log(boletoDia + " Boletos de un día");
                      console.log(boleto2Dias + " Boletos de 2 días");
                          console.log(boletoCompleto + " Boletos completos");


                      var totalPagar = (boletoDia * 30) + (boleto2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * 0.93) + cantEtiquetas * 2 ;
                      console.log("El Total a pagar es: " + totalPagar);

                      var listadoProductos = [];

                      if(boletoDia >= 1) {
                      listadoProductos.push(boletoDia + ' Pases por día');
                      }
                      if(boleto2Dias >= 1)  {
                        listadoProductos.push(boleto2Dias + ' Pases por 2 días');
                      }
                      if(boletoCompleto >= 1) {
                        listadoProductos.push(boletoCompleto + ' Pases completos');
                      }
                      if(cantCamisas >= 1) {
                        listadoProductos.push(cantCamisas + ' Camisas');
                      }
                      if(cantEtiquetas >= 1) {
                        listadoProductos.push(cantEtiquetas + ' Etiquetas');
                      }

                      lista_productos.style.display = "block";
                      lista_productos.innerHTML = '';

                      for (var i = 0; i < listadoProductos.length; i++) {

                        lista_productos.innerHTML += listadoProductos[i] + ' <br>';
                      }

                      suma.innerHTML = ' $ '+ totalPagar.toFixed(2);


                      console.log(listadoProductos);



              }


            }
            function  mostrarDias() {

              var boletoDia = parseInt(pase_dia.value, 10)|| 0,
                  boleto2Dias = parseInt(pase_dosdias.value, 10)|| 0,
                  boletoCompleto = parseInt(pase_completo.value, 10)|| 0;

                  var recorridoDias = [];

                  if (boletoDia>0) {
                    recorridoDias.push('viernes');
                  }
                  if (boleto2Dias>0) {
                    recorridoDias.push('viernes', 'sabado');
                  }
                  if (boletoCompleto>0) {
                    recorridoDias.push('viernes', 'sabado', 'domingo');
                  }

                  for (var i = 0; i < recorridoDias.length; i++) {

                    document.getElementById(recorridoDias[i]).style.display = "block";
                  }

                  console.log(recorridoDias);






            }

        }







      });
     })();
