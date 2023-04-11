var botones =document.querySelectorAll('button');
for (x of botones) {
    x.addEventListener('click',function () {
        /* document.querySelector('.mensaje, .rojo').innerHTML='Has seleccionado: '+this.innerHTML */
        document.querySelector('.rojo, .mensaje').innerHTML='Has seleccionado: '+this.innerHTML
    });
}