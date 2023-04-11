function mostrarElementos(...muestra) {
    console.log(muestra);
    document.write(muestra);
}
//EJERCICIO 1 Utilizando la función arrow calcular el factorial de un numero
function factorial() {
    let numero = window.prompt('Introduce nº');
    let factorial = x => {
        if ((x === 0) || (x === 1)) {
            return 1
        } else {
            x = parseInt(x);
            return x * factorial(x - 1);
        }
        /* if (x === 0) {
            return 1;
        } else if (x === 1){
            return 1;
        }else {
            x = parseInt(x);
            return x * factorial(x - 1);
        } */
    }
    //console.log(`El factorial de ${numero} es ${factorial(numero)}`);
    mostrarElementos(`El factorial de ${numero} es ${factorial(numero)}`);

}//factorial

//EJERCICIO 2 Muestra los números pares del siguiente array utilizando la función arrow. var números = new Array[2,7,6,8,3,4,1,9];
function sacaPares() {
    var array = [2, 7, 6, 8, 3, 4, 1, 9];
  /*   for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i])
        }
    }
    for (let i in array) {
        if (array[i] % 2 === 0) {
            console.log(array[i])
        }
    } */
    for (let i of array) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}//Pares
//EJERCICIO 3 Crear una función que reciba un importe y un descuento. Este será optativo. Mostrar por consola el importe total
function capturaDatos() {
        var total = (i,d)=>i-((i*d)/100)
        const importe = parseFloat( window.prompt('Introduce importe'));
        const descuento= parseFloat( window.prompt('Introduce descuento'));
        console.log(total(importe,descuento));
        /*console.log(`Total con descuento: ${total}`)
         var descontar = (importe,descuento,total)=> ({Importe:importe, descuento:descuento, Total:total})
        const importe = parseFloat( window.prompt('Introduce importe'));
        const descuento= parseFloat( window.prompt('Introduce descuento'));
        let total = importe-((importe*descuento)/100); */
}
//EJERCICIO 4 Modificar el ejercicio anterior para que reciba también la tasa de IVA: 4,10,21. Por defecto será 21.

//EJERCICIO 5 Modificar el ejercicio anterior para poder pasar como argumento varios importes