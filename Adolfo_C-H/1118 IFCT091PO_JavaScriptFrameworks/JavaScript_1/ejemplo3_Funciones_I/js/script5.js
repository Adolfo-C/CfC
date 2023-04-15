function mensaje() {
    //Recogida de datos tradicional
    var miClave = document.getElementById('clave').value;
    //Recogida actual
    var eMail = email.value;//-> Nombre_del_id.value

    document.getElementById('resultado').innerHTML=
    'Bienvenido al usuario: ' + eMail + '<br>' +
    'pulse para ingresar'
}

function limpiar() {
    document.getElementById('resultado').innerHTML='';
}

function eventoSecundario() {

    /*    window.print(); imprimir */
/*location.href ='ejercicio4-Value.html' localizar una página en concreto*/
location.href='http://google.es'
}