function exito() {
    var sueldo = parseFloat(calculoSueldo.value);
    var hijos = parseFloat(calculoHijos.value);
    var sexo = calculoSexo.selectedIndex;
    var respuesta = document.getElementById('resultado');

    console.log(sueldo + ' € ' + typeof (sueldo));
    console.log(sexo + ' es ' + typeof (sexo));
    console.log(hijos + ' hijos ' + typeof (hijos));

    var incremento = 0.5;
    if (sueldo < 15000) { incremento = incremento + 1.00; }
    if (sexo == 2) { incremento = incremento + 1.08; console.log(incremento + ' acumulado 2.58 máx.'); }
    if (hijos > 0) { incremento = (hijos * 1.20) + incremento; console.log(hijos * 1.20 + ' Incremento por hijos'); }

    incremento=incremento*100;
    Math.round(incremento);
    incremento=incremento/100;
    sueldo = sueldo + ((sueldo * incremento) / 100);
    console.log(sueldo + ' nuevo sueldo anual');
    respuesta.innerHTML =
        'Anual: ' + sueldo + '\n' +
        'Mensual: ' + (Math.round((sueldo / 12)*100))/100 + '\n' +
        'Incremento total: ' + incremento + '%';
}
function limpiar() {
    document.getElementById("limpiar").reset();
    document.getElementById('resultado').innerHTML = '';

}
enviar.addEventListener('click',capturarForm);
function capturarForm(){
    sueldo = document.getElementById('calculoSueldo').value;
    hijos = document.getElementById('calculoHijos').value;
    sexo = document.getElementById('calculoSexo').selectedIndex;

    validarDatos();
}
function validarDatos() {
    if ((isNaN(sueldo))|| sueldo =='')  {
        mostrarError('calculoSueldo');
    }
    if (hijos=='') {
        mostrarError('calculoHijos');
    }
    if (sexo == null || sexo == 0) {
        mostrarError('calculoSexo');
    }
     document.getElementById(id).classList.add('is-valid');
}
function mostrarError(id) {
    document.getElementById(id).classList.add('is-invalid');
    swal('Revise los campos');
}
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
}
