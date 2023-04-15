/*
* Calculo credito
crt = crédito*rédito(interés)*tiempo

Partiendo de las siguientes condiciones que ofrece esta empresa de creditos: Microcréditos
Definimos:
a. Tiempo:
    - a: 24 meses el tipo de interés será 15%
    - a: 60 meses ell tipo de interés será del 10%
    - a: partir de 60 meses es tipo de interes será de 8%
*/

function calcular() {
    //Variables eje
    var tiempo = parseFloat(window.prompt('Introduce el tiempo a pagar comodamente: '));
    var capital = parseFloat(window.prompt('Introduce lo que vale tu ilusion: '));
    var interes = 0;
    //variable sucedánea
    var mordida = 0;

    //Desarrollamos el análisis de las variables, estructura de control

    if (tiempo <= 24) {
        interes = 0.15
    } else if (tiempo <= 60) {
        interes = 0.10
    } else {
        interes = 0.08
    }

    var pago = (capital * interes) / tiempo;

    document.getElementById('resultado').innerText =
        'Credito solicitado: ' + capital + '€' + '\n' +
        'Tipo de interés ' + interes*100 + '%' + '\n' +
        'Tiempo a pagar: ' + tiempo + 'meses' + '\n' +
        'Total a pagar cómodamente: ' + pago + '€/mes' + '\n'
        var mordida = pago*0.03;//abono a CC.AA
        console.log('Importe por asesoramiento: ' + mordida + '€');
}
//Revisar para imprimir