/* document.getElementById('') */
function funcionesMath() {
    var numero=8;
    document.getElementById('resultado').innerHTML=
    'Logaritmo: '+Math.log(1000)+ '<br>'+
    'Exponencial: '+Math.exp(numero)+ '<br>'+
    'Raiz cuadrada: '+Math.sqrt(9)+ '<br>'+
    'Potencia 2^(elevado)8: '+Math.pow(2,numero)+ '<br>'+
    'Valor absoluto: '+Math.abs(-66845)+ '<br>'+
    'Redondeo a baja: '+Math.floor(6.3458)+ '<br>'+
    'Redondeo al alza: '+Math.ceil(6.3458)+ '<br>'+
    'Redondeo medio: '+Math.round(6.3458)+ '<br>'+
    'Random o semilla: '+Math.random()+ '<br>'+
    'Random o semilla(0-10): '+Math.random()*10+ '<br>'+
    'Valor máximo: '+Math.max(1,4,9,6)+ '<br>'+
    'Valor mínimo: '+Math.min(3,4,2,6)+ '<br>'+
    'Coseno Pi: '+Math.cos(Math.PI)+ '<br>'+
    'Cambio de nº a String: '+numero.toString();
}
function funcionesString() {
    var texto = 'JAVASCRIPT Estructura de Cadena de Texto(6)'
    document.getElementById('resultado').innerHTML =
    'Minusculas: ' + texto.toLocaleLowerCase() + '<br>' +
    'Mayusculas: ' + texto.toLocaleUpperCase() + '<br>' +
    'Localización de caracter @: '+texto.indexOf('@')+'<br>'+
    'Longitud de la cadena de texto: ' + texto.length + '<br>' +
    'Valor UNICODE: ' + texto.charCodeAt(texto.indexOf('J')) + '<br>' +
    'Unicode : ' + String.fromCharCode(960);
}
function funcionesDate() {
    var fecha = new Date();
    document.getElementById('resultado').innerHTML=
    'Fecha: ' + fecha.toLocaleDateString() + '<br>' +
    'Hora: ' + fecha.toLocaleTimeString() + '<br>' +
    'Minutos: ' + fecha.getMinutes() + '<br>' +
    'Segundos: ' + fecha.getSeconds() + '<br>' +
    'Milisegundos: ' + fecha.getMilliseconds()+'<br>'+
    'Mes: ' + (1+fecha.getMonth()) + '<br>' +
    'Día de la semana: ' + fecha.getDay() + '<br>' +
    'Día del mes: ' + fecha.getDate() + '<br>';
}