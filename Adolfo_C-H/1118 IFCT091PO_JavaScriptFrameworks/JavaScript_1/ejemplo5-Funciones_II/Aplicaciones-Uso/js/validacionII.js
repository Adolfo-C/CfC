function mensaje() {
    var eMail = inputEmail.value;
    var miClave = inputClave.value;
    
    /* if (miClave.length =!0 && (eMail.length =!0))  */

    if (miClave.length !=0 && eMail.length !=0) {//famoso pattern o estructura de control siendo muy útil el método .test
        document.getElementById('resultado').innerHTML=
        ' Clave Correcta: Acceda a pagina principal'
    } else {
        swal ('Son necesarios email y clave')
    }
}

function limpiar() {
    document.getElementById('resultado').innerHTML=''
}

function secundaria() {
    location.href='Validaciones.html';
}