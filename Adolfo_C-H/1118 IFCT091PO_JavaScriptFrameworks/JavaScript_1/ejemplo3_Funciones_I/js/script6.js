//1º declarar la variable eje
var contador = 0;
var total=0;
function incrementarClick() {
    sumarClick(++contador);//operadores logicos incrementa de unidad en unidad
    venta();
}
function sumarClick(contador) {
    document.getElementById('nºClick').innerHTML = contador;
}
function venta() {
    var total = (contador*14.95);
    document.getElementById('resultado').innerHTML ='Venta total: ' + total+ '€'
}
function borrar() {
    contador=0;
    total=0;
    sumarClick(contador);
    document.getElementById('resultado') .innerHTML = ''
}