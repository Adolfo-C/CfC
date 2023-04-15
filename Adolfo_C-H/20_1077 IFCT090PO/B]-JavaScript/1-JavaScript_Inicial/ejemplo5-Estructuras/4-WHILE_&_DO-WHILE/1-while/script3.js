function acceso() {
    var clave='1234';
    var intentos=false;
    var contador=0;
    while (contador<3 && intentos==false) {
        var claveAcceso = prompt('Introduce clave @admin');
        if(claveAcceso===clave){
            intentos=true;
            document.getElementById('autorizado').innerHTML='Acceso autorizado'
        }
        contador++;
    }
    if (!intentos) {
        document.getElementById('autorizado').innerHTML='Ha sobrepasado el nº de intentos'
    }
}
document.oncontextmenu = function () {
    return false
}