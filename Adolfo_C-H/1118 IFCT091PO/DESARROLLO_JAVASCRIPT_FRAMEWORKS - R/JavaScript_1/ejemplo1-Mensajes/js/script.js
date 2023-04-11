

/* Comentarios */

// comentario simple

/**
*           ========
*           MENSAJES
*           ========
*       Conatos, llamadas, informacion,... al usuario
*/

/*1º alertas
Sintaxis:
 alert((parametros)'texto, cadena de caracteres, frases....' + variables);
*/
/* alert('Bienvenidos a mi primer Script'); Comentamos para que no interfiera en la ejecucion */

/*1.1 Alertas + microServcios (FrameWork)
1. Instala con inyeccion de su script, un conjunto de librerias, de estética y proyeccion (alert)
2. script src="->librerias" dentro del head, donde sustituye las directivas que hemos definido en el script
*/
swal({
    title: "Bienvenidos a un Alert en condiciones!",//Título
    text: "SweetAlert",//Texto del boton
    icon: "success",//Tipos de iconos(success, warning, info...)
    button: 'Gracias y funcionando'
  });//2 ciclo
/*
2º (Backstage),
 llamadas transversales
 Sintaxis:
 console.log((parametros)'textos, cadena de caracteres, ...frases...' + variables)
*/
console.log(3*2);
console.log('Hola');
//Conclusion, en momento que detecta numeros,accedemos literalmente a todos los operadores matematicos (+,*,-,/)
console.log(2+2+8+'Adios'+(2+2)+ ' ' +2+2);
//Conclusion, cuando halla entre un operador variables que no sean numericas o bien combinando una numerica con
//ese elemento sera o bien + CONCATENADOR, /,-,* grafia


/*
3º Mensajes Escritos
Sintaxis:
document.write((parametros)'textos, cadena de caracteres, ...frases...' + variables);
*/
document.write('<h3> HOLA! Bienvenido a mi primer script dentro de mi pagina</h3>');//1 ciclo, si no cierra etiqueta <html> afecta a lo siguiente 