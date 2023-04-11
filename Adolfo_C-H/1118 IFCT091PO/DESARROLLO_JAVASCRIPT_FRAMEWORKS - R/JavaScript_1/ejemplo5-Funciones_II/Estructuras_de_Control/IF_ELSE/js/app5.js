

function calcular() {
    //variables eje
    var peso = calculoPeso.value;
    var altura = calculoAltura.value;
    //Variable residual
    var imc = 0;
    var respuesta = document.getElementById('resultado');
    //⬇
    imc = peso / (Math.pow(altura, 2));
    console.log(imc);
    /*
    *Intervalos de imc:
        ->  <= 18.5 Peso por debajo de lo normal,
        ->  <=24.9 Peso standar o saludable
        ->  <=29.9 Spbre peso indice poco saludable
        ->  >30 en obesidad y trastorno
    */
    if (imc <= 18.5) {
        respuesta.innerHTML = '18.5 Peso por debajo de lo normal'
    } else if (imc<=24.9) {
        respuesta.innerHTML = '24.9 Peso standar o saludable'
    } else if (imc<=29.9) {
        respuesta.innerHTML = '29.9 Sobre peso indice poco saludable'
    } else {
        respuesta.innerHTML = '30 en obesidad y/o trastorno 🐷'
    }
/*
venta();
transaccion();
confirmacion();
datonConsole();
recogidaErrores();
*/
}
function limpiar() {
    document.getElementById('limpiar').reset();//limpia campos y en este caso no admite el borrado del id= 'resultado' ojo data-bg-dismiss=modal
    //document.write(resultado)''
    document.getElementById('resultado').innerHTML='';
}