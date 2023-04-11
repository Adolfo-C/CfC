/* 
        ===================
               CLASES
        ===================
    Por la necesidadm ya de alcanzae la posibilidad de poder implementar
    objetos que fueran s ser utilizadoa en nuestras aplicaciones.
    Ganó rápidamente un gran interes dada esa ventaja teactivca de la implementacion
     de herencias, metodos dentro de las estructuras de nuestro codigo

     Clases de ECM6 para implementar objetos, js y ts
     TypeScript añade tipados estáticos y objetos basados en esta configuración de clase

     Conclusiones previas

     *clases en mayus y palabra class
     **Sintaxis

     class Nombre{
        constructor(){

        }
        metodos(){

        }
     }
ejemplo:

class Persona{

    constructor(atributos, habilidades, ...){

    }
    hablar(){

    }
    acciones(){
        this.hablar
    }
}

*/

var alumnos = [[1, 'Maria', 'de las Mercedes', 8.3], [2, 'Juan', 'Castejon', 4.8], [3, 'Pedro', 'Valdivia', 7.2]]
/* ORTODOXIA INSTANCIANDO PROPIEDADES */
for (let i in alumnos) {
    let [id, nombre, apellido, nota] = alumnos[i]
    document.write(`datos del alumno: ${id}, nombre: ${nombre} y apellidos: ${apellido} y nota ${nota} <br>`)
}

/* 
B) INSTANCIANDO A CLASES
*/

class Alumno {
    //Caracteristicas del objeto
    //Propiedades
    //Variables Globales
    id;
    nombre;
    apellido;
    nota;

    /* b.1 Contructor
    esencialmente su funcion es crear objetos a partir de la clase
    el modelo para las propiedades del objeto
    */
    constructor(id, nombre, apellido, nota) {
        this.numero = id
        this.primerNombre = nombre
        this.surname = apellido
        this.calificacion = nota
    }
    /* 
    Reflexión:
    El puntero .this ayuda a diferenciar y acceder a las propiedades
    de los argumentos recibidos por el constructor
    */

    /* 
    b.2 Metodos/funciones
    */

    mostrarAlumnos() {
        document.write(`datos del alumno: ${this.numero}, nombre: ${this.primerNombre} y apellidos: ${this.surname} y nota ${this.calificacion} <br>`)
    }
}//Cierre del class------------------
/* 
b.3 Acciones, que recurren al uso de los metodos
*/
for (let i in alumnos) {
    let[id,nombre,apellido,nota]=alumnos[i]//Propiedades
    let listaAlumnos = new Alumno(id,nombre,apellido,nota); //let listaAlumnos = new Alumno(...alumnos);
    listaAlumnos.mostrarAlumnos()//coyuntura

}

function ejecutar() {
    for (let i in alumnos) {
        let[id,nombre,apellido,nota]=alumnos[i]//Propiedades
        let todos = new Alumno(id,nombre,apellido,nota);
        todos.mostrarAlumnos()
    
    }
    
}
