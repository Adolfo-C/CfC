/*
💣CREACION DE VARIABLES:

Sintaxis
va minusculaNombre = "" ASIGNAMOS A LA VARIABLE CON ELNOMBRE minusculaNombre un valor
Declaracion:
a)exlicita:
var minusculaNombre;
minusculaNombre = "";
b)implicita
var minusculaNombre = "";

*/



var nombre = 'Toño';/*La variable nombre está asignada al valor Toño*/
swal({
    title: 'Me llamo' + nombre,//Título
    text: "Nombre de Pila",//Texto del boton
    icon: "info",//Tipos de iconos(success, warning, info...)
    button: 'Un placer teneros aqui'
});
alert('Me llamo' + nombre);