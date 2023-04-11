var n1; var n2;
function captura() {
    n1 = parseInt( prompt('Introduce un número'));
    n2 = parseInt( prompt('Introduce otro número'));
}
function sumar() {
    swal('La suma es: '+(n1+n2))
}
function restar() {
    swal('La resta es: '+(n1-n2))
}
function multiplicar() {
    swal('La multiplicación es: '+(n1*n2))
}
function dividir() {
    swal('La división es: '+(n1/n2))
}