//1º Declaramos las variables

var nombre = "";
var apellidos = "";
var email = "";
var telefono = "";
var direccion = "";
var ciudad = "";
var codigoPostal = "";
var edad = "";
var dni = "";
var sexo = "";

//2º Tratamiento de los datos

/*
                        El metodo addEventListener

        Como un elemento expectante, dentro del entorno de nuestri client(Navegador),
         a un evento o la interaccion del usuario
        Se trabaja directamente desde js y solo hace referencia al evento.
        ** Sintaxis:
            Parte de una referencua, asociada al html y expectante a su presencia (primer Parámetro), seguidamente
            se ejecutará la funcion asociada o indicaca (segundo parámetro). Podremos encontrar de forma opcioal 
            redefinido por las variables true o false (tercer Parámetro)

            target.addEventListener('Tipo de evento', funcion_a_LANZAR, boolean )

*/
enviar.addEventListener('click',capturarForm);
function capturarForm(){
    nombre = document.getElementById('inputNombre').value;
    apellidos = document.getElementById('inputApellidos').value;
    email = document.getElementById('inputEmail').value;
    telefono = document.getElementById('inputTelefono').value;
    direccion = document.getElementById('inputDireccion').value;
 /* ciudad = document.getElementById('inputCiudad').value; */
    codigoPostal = document.getElementById('inputCp').value;
    edad = document.getElementById('inputEdad').value;
    dni = document.getElementById('inputDni').value;
    sexo = document.getElementById('inputSexo').selectedIndex;

    validarDatos();
}

function exito() {
    swal('Enhorabuena! Datos enviados correctamente');
}
//desgranar las funciones
function validarDatos() {
    if (!(isNaN(nombre))) {
        mostrarError('inputNombre');
    }
    if (!(isNaN(apellidos))) {
        mostrarError('inputApellidos');
    }
    if (direccion=="") {
        mostrarError('inputDireccion');
    }
 /*    if (ciudad="") {
        mostrarError('inputCiudad');
    } */

    /*
    el método .test() comparar el expresión regular con la variable, si cumple los parametros de la expresion regular entonces será == true
    ESTRUCTURAS DE CONTROL:
    /^\ Inicio de estructuras (^->shift+`+space)
    {d} nº de digitos
    /$ final de la expresion regular
    [] condiciones de intervalo de los caracteres y los numeros A-Z 0-9
     ? operador condicional
    */
  
    if (!/^\d{5}$/.test(codigoPostal)) {
        mostrarError('inputCp');
    }
    if (email=='') {
        mostrarError('inputEmail');
    }
    if (!/^\d{9}$/.test(telefono)) {
        mostrarError('inputTelefono');
    }
    if ((isNaN(edad))|| edad =='')  {
        mostrarError('inputEdad');
    }
    if (dni=='') {
        mostrarError('inputDni');
    }
    if (sexo == null || sexo == 0) {
        mostrarError('inputSexo');
    }

}

function mostrarError(id) {

    //document.getElementById(id).value = '⚠';//Valores añadidos
    /*
    Metodos de llamada desde Javascriot a Css, precisamente con el interes de mostrar perspectiva al usuario desde error hasta exito
    */
    document.getElementById(id).classList.add('is-invalid');//Podemos añadir clases de otros framework
    /*
    mensaje al usuario
    */
    swal('Revise los campos');
}
