
function respuesta() {
  var miClave = document.getElementById('clave').value;
  resulcard.innerHTML = email.value
}
function borrar() {
  document.getElementById('resulcard').innerHTML = ''
}
function redireccionar() {
  login()
}

/* 
var coll = document.getElementsByClassName("collapsible");
var ex;
function expandir() {
    for (ex = 0; ex < coll.length; ex++) {
        coll[ex].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }
} */
x = false
    function navReloj() {
      x = !x;
      if (x) {
        t = setInterval(function () {
          var hoy = new Date();
          var mes = hoy.getMonth();
          var año = hoy.getFullYear();
          var hoy = new Date();
          var dia = hoy.getDate();
          var h = hoy.getHours();
          var m = hoy.getMinutes();
          var s = hoy.getSeconds();
          m = ponerCero(m);
          s = ponerCero(s);
          h = solLuna(h);
          document.getElementById('navReloj').innerHTML = h + ':' + m + ':' + s;
          switch (mes) {
            case 0: mes = 'Enero'; break;
            case 1: mes = 'Febrero'; break;
            case 2: mes = 'Marzo'; break;
            case 3: mes = 'Abril'; break;
            case 4: mes = 'Mayo'; break;
            case 5: mes = 'Junio'; break;
            case 6: mes = 'Julio'; break;
            case 7: mes = 'Agosto'; break;
            case 8: mes = 'Septiembre'; break;
            case 9: mes = 'Octubre'; break;
            case 10: mes = 'Noviembre'; break;
            case 11: mes = 'Diciembre'; break;
            default: mes = 'Error404 or Unknown'; break;
          }
          document.getElementById('hoy').innerHTML = dia + ' ' + mes + ' ' + año;
        }, 1000);
      } else { clearInterval(t); hoy.innerHTML = ''; document.getElementById('navReloj').innerHTML = '' }
    }
    function ponerCero(x) { if (x < 10) { x = '0' + x } return x; }
    function solLuna(i) {
      if (i < 8) { i = ' 🌛 AM 0' + i; }
      else if ((i > 8) && (i < 10)) { i = ' sol🌞 AM 0' + i; }
      else if ((i > 8) && (i < 13)) { i = ' 🌞 AM ' + i; }
      else if ((i > 12) && (i < 19)) { i = ' 🌞 PM 0' + (i - 12); }
      else i = ' 🌛 PM ' + (i - 12);
      return i;
    }