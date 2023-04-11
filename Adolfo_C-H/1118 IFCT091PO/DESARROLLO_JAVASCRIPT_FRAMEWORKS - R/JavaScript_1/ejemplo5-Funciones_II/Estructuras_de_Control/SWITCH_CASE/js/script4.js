function inicio() {
    //1º declaracion de variables
    var hoy = new Date();

    var h = hoy.getHours();
    var m = hoy.getMinutes();
    var s = hoy.getSeconds();

    var dia = hoy.getDate();
    var mes = hoy.getMonth();
    var año = hoy.getFullYear();

    m = ponerCero(m);
    s = ponerCero(s);
    //h = ponerCero(h);
    h = solLuna(22);
    //h = ponerCero(h,true);
    //m = ponerCero(m,false);
    //s = ponerCero(s,false);

    document.getElementById('reloj').innerHTML = '⌚' + h + ':' + m + ':' + s;
    switch (mes) {
        case 0:
            mes = 'Enero'
            break;
        case 1:
            mes = 'Febrero'
            break;
        case 2:
            mes = 'Marzo'
            break;
        case 3:
            mes = 'Abril'
            break;
        case 4:
            mes = 'Mayo'
            break;
        case 5:
            mes = 'Junio'
            break;
        case 6:
            mes = 'Julio'
            break;
        case 7:
            mes = 'Agosto'
            break;
        case 8:
            mes = 'Septiembre'
            break;
        case 9:
            mes = 'Octubre'
            break;
        case 10:
            mes = 'Noviembre'
            break;
        case 11:
            mes = 'Diciembre'
            break;
        default:
            mes = 'Error de conexión'
            break;
    }
    document.getElementById('hoy').innerHTML = dia + ' ' + mes + ' ' + año;
    //Redundancia de funciones
    /*
    Aparte de poder mostrar la redundancia de funciones, podemos ver la capacidad de loa callbackç
    setTimeout() con una funcion principal que no es otra que la de ejecutar una funcion tras un
    periodo de tiempo determinado
        Sintaxis:
        argumento1: Llama a la funcion, medido en milisegundos
        argumento2; tiempo que se ha acotado a la funcion, medido en milisegundos

        setTimeout(function()){
            function callback/argumento1
        }, tiempo/aergumento2
     */
    var t = setTimeout(function () { inicio() }, 1000);
}
//Máquina perfecta: FESTRUTURA DE EJECUCIÓN PURA
//fUnción que genera una estructura que mimetizará con el parametro
function ponerCero(x) {
    if (x < 10) {
        x = '0' + x
    } return x;
}
//Ejercicio Replicar una ejecucion pura para el parametro horas, y que defina en una condicion
//am o pm en definitiva
function solLuna(i) {
    if (i < 8) {
        i = ' 🌛 AM 0' + i;//0<i<8
    } else if ((i > 8) && (i < 10)) {
        i = ' 🌞 AM 0' + i;//8<i<10
    } else if ((i > 8) && (i < 13)) {
        i = ' 🌞 AM ' + i;//10<i<13
    } else if ((i > 12) && (i < 19)) {
        i = ' 🌞 PM 0' + (i - 12);//12<i<19
    } else i = ' 🌛 PM ' + (i - 12);//19<i>24
    return i;
}

/* function ponerCero(x, horas) {
    if (x < 10) {
        x = '0' + x;
    }
    console.log(horas)
    if (horas == true) {
        if (x <= 12) {
            x = '☀️AM' + x;
        }
        else { x = '🌕PM' + (x-12); }
    } return x;

} */

