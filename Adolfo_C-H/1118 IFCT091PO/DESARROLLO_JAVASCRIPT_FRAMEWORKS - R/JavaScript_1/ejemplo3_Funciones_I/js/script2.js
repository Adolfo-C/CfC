
//1º variable eje

var n1 = parseInt(window.prompt('Introduce el primer número'));
var n2 = parseInt(window.prompt('Introduce el segundo número'));


function sumar(){
    var resultado = n1+n2;//variable local
    swal('la suma es: ' + resultado);

}

function restar(){
    swal('la resta es: ' + (n1-n2));//variables locales

}

function multiplicar(n1,n2){//estructuradefinida y explicita de la funcion
    console.log(n1)
    swal('la multiplicacion es: ' + (n1*n2));

}

function dividir(){
    swal('la división es: ' + (n1/n2));

}