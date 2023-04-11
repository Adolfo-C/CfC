function respuesta() {
    var miClave = document.getElementById('clave').value;
    var eMail = email.value;
    document.getElementById('resultado').innerHTML='Bienvenido '+ eMail
}
function borrar() {
    document.getElementById('resultado').innerHTML=''
}
function redireccionar() {
    location.href='http://google.es'
    location.href='../indexGeneral.html'
}