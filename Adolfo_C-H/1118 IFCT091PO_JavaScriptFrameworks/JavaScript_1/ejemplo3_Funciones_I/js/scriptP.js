function hora() {
    var hora = new Date();
    document.getElementById('resultado').innerHTML= hora.toLocaleTimeString();
}
function limpiar() {
    document.getElementById('resultado').innerHTML= '';
}