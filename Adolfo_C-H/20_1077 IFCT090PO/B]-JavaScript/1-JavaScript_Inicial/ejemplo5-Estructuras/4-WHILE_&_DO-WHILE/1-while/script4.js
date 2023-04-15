function ventaIncremento() {
    /* recogida de dato desde id:
    a)var num = document.getElementById('cantidadBotijos').value;
    a´)var num=cantidadBotijos.value;
    */
    /* recogida desde name="" */
    var num = document.repetir.cantidad.value;
    /* método Number() en lugar de parseInt() */
    var num = Number(num);
    console.log(num)
    var incrementa=0;
    var respuesta = document.getElementById('resultado');//resultado
    if (num<1||num>5||isNaN(num)==true) {
        respuesta.innerHTML='No ha introducido nº de uds válido'
    } else while(incrementa<num){
        incrementa++
        var precio =10.95;
        var total= precio*incrementa;
        respuesta.innerHTML='<strong> El importe a abonar será de: '+total.toFixed(2)+'€'
    }
}