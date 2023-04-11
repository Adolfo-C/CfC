//1ºdeclaro las variables
var estiloBorde = false;//No va a tener borde
var estiloColor = false;
var estiloSombra = false;

function borde() {
    if (estiloBorde == false) {
        document.getElementById('cuadrado').style.border = '3px solid #88939c';
        estiloBorde = true;
    } else {
        document.getElementById('cuadrado').style.border = 'none';
        estiloBorde = false;
    }
}
function color() {
    if (!estiloColor) {//if tiene en cuenta ! cómo si la condición trata la variable en modo false
        document.getElementById('cuadrado').style.backgroundColor = 'pink';
        estiloColor = true
    } else {
        document.getElementById('cuadrado').style.backgroundColor = '#2196f3';
        estiloColor = false;
    }
}
/*
Ejercicio:
Utilizando la misma estructura de control de iteracion, con el metodo .styles, utilizar para la
sombra el metodo . className apuntando a la clase .sombra de nuestra hora de estilos styles6.css
*/
function sombra() {
    if (!estiloSombra) {
        document.getElementById('cuadrado').className = "sombra"
        /* estiloSombra = true; */
    } else {
        document.getElementById('cuadrado').className = null
        /*  estiloSombra = false; */
    }
    //Saliendo de la condición y utilizando un cambio de variable buleana
    estiloSombra = !estiloSombra;
}
