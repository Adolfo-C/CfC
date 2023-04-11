/*
    Cómo métod su sintaxis .getElementById('nombreId')
        Definido como LA PROYECCION DE UN ELEMENTO VQUE CONTENDRÁ LA DEFINICIÓN QUE TRASLADA eL ID
        En definitiva poder manipular u obtener información de un elemento y su contenido dentro del        
        DocType
        id- referenciador que ofrece html para conectar al documento desde otros entornos

        
*/

/*
Objeto integrado(metalenguaje de js), permitirá realizar operaciones matemáticas en js
(Math es un objeto global de js, con una característica que lo diferencia de otros, es estático y además
    no podrá instanciar objetos)
*/
function funcionesMath() {
    var numero = 8;//number
    var texto = numero.toString();//string
    document.getElementById('resultado').innerHTML =
        'Logaritmo: ' + Math.log(1000) + '<br>' +
        'Exponencial de 8: ' + Math.exp(8) + '<br>' +
        'Raíz Cuadrada de 9: ' + Math.sqrt(9) + '<br>' +
        'Potencia 4, elevado a 8: ' + Math.pow(4, 8) + '<br>' +//Base, exponente
        'Valor absoluto: ' + Math.abs(-6586) + '<br>' +
        'Redondeo medio: ' + Math.round(6.3458) + '<br>' +
        'Redondeo al alza: ' + Math.ceil(6.3458) + '<br>' +
        'Redondeo a la baja: ' + Math.floor(6.3458) + '<br>' +
        'Random o semilla: ' + Math.random() + '<br>' +
        'Random del 1 al 10: ' + Math.random(1) * 10 + '<br>' +
        'Valor máximo: ' + Math.max(5, 8, 9, 2, 1, 6) + '<br>' +
        'Valor mínimo: ' + Math.min(5, 8, 9, 2, 1, 6) + '<br>' +
        'Coseno de Pi (Anidando 1 método en otro)' + Math.cos(Math.PI) + '<br>' +
        /*
        Vamos a diferenciar el método objeto de un metodo
        */
        'Transformación de número a string ' + texto;
    /*
    Fehacientemente que texto es un string

        console.log('la variable es: ' + (texto));
        console.log('la variable es: ' + typeof numero);//parece que funciona sin parentesis
        console.log('la variable es: ' + typeof (numero));//más correcto
        swal('la variable es: ' + typeof texto);
        alert('la variable es: ' + typeof texto);
    */

}

/*
Funciones de caracteres String, de uso principal para las representaciones o manipulaciones
de una secuencia de caracteres. Siendo muy útil que Los caracteres, puede estar todo definido como string/caracteres
y almacenar datos
*/
function funcionesString() {

    var texto = 'JAVASCRIPT Estructura de Cadena de Texto(6)'
    document.getElementById('resultado').innerHTML =
        'Minusculas: ' + texto.toLocaleLowerCase() + '<br>' +
        'Mayusculas: ' + texto.toLocaleUpperCase() + '<br>' +
        'Longitud de la cadena de texto: ' + texto.length + '<br>' + //length no es método
        'Valor UNICODE: ' + texto.charCodeAt(texto.indexOf('J')) + '<br>' +
        //llamamos a un objeto String, al igual que a Math
        'Unicode: ' + String.fromCharCode(960);
}
/*
Objeto Date, integrado en js, y nos ofrece y almacena las fechas, horas,..., Y provee
de métodos para manejarlos, ed como Math.metoDos(), esa caracteristica estática de Math, no
se producirá aqui.
Sintaxis:
var fecha = new Date()-> Cada vez que invoco, llamo, instancio la variable fecha, me asigna automaticamente
un objeto defino por su metodo; Dicho objeto se presenta en subitamente y desaparecera subitamente
*/

function funcionesDate() {
    var fecha = new Date();
    document.getElementById('resultado').innerHTML=
    'Fecha: ' + fecha.toLocaleDateString() + '<br>' +
    'Hora: ' + fecha.toLocaleTimeString() + '<br>' +
    'Minutos: ' + fecha.getMinutes() + '<br>' +
    'Segundos: ' + fecha.getSeconds() + '<br>' +
    'Mes: ' + (1+fecha.getMonth()) + '<br>' +//? 0 al 20, el primer elemento siempre será el 0, usamos (1+fecha.getMonth())o (fecha.getMonth()+1) 
    'Día de la semana: ' + fecha.getDay() + '<br>' +
    'Día del mes' + fecha.getDate() + '<br>';
}
/*
function funcionesDate(){
    var fecha = new Date();
    const nombreDia = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
    'domingo',
    ]
    document.getElementById('resultado').innerHTML =
    'Fecha: ' + fecha.toLocaleDateString() + '<br>' +
    'Hora: ' + fecha.toLocaleTimeString() + '<br>' +
    '<label style="color: orange">Minutos: ' + fecha.getMinutes() + '</label>' + '<br>' +
    'Segundos: ' + fecha.getSeconds() + '<br>' +
    'Mes: ' + fecha.getMonth() + '<br>' + //? El primer elemento siempre es el 0 (0 enero, 1 febrero...)
    'Día de la semana: ' + fecha.getDay() + ' que es ' + '<label style="color: red"><strong>' + nombreDia[fecha.getDay()]+ '</label></strong>' + '<br>' +
    'Día del mes: ' + fecha.getDate();
    }
*/