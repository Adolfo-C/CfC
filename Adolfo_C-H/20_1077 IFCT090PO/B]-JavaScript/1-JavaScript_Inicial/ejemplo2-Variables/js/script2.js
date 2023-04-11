var texto='Cadena de Texto';var num=5;buleana=true;igualdad=0
/*el contenido de document se trata cómo html */
document.write('<h3>Variable texto/string: '+texto+'</h3>');//fin de cierre </h3> incorpora un salto de línea en su estilo (margin-top)
document.write('<h3>Variable número/number: '+num+'<br>');
document.write('<h3>Variable buleana/boolean: '+buleana+'<br>');
document.write('<h3>Variable texto: '+texto+'<br>');
/*alert y console no aceptan etiquetas html \n \t \' */
alert(texto+'\n'+num+'\n'+buleana);
console.log('\t'+texto+'\n \t'+num+'\n \t'+buleana);
