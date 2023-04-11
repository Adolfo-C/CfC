

//Declarando las variables -eje-

var nombre;
var apellidos;
var edad;

//Asignacion

nombre = window.prompt('Introduce tu nombre');
apellidos = window.prompt('Introduce tu primer apellido');
edad = window.prompt('Introduce tu edad');

//Muestro la entrada de las variables

document.write('<h2> Bienvenido: </h2>' + nombre + " "+ apellidos + '<br>' + 'con edad: ' + edad +'años');

//Ejercicio, a Desde un console.log
console.log('Bienvenido: \n' + nombre + " "+ apellidos + '\n' + 'con edad: ' + edad +'años');