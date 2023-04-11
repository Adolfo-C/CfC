function display() {
    var respuesta = resultado;
    switch (event.target.id) {//respuesta.innerHtml = '3ª Planta';console.log(respuesta.innerHtml);
        case '1': respuesta.innerText = '1ª Planta';break;
        case '2': respuesta.innerText = '2ª Planta';break;
        case '3': respuesta.innerText = '3ª Planta';break;
        default:break;
    }
    var botones = document.getElementsByTagName('button');
    for (var indice in botones) {
        if (botones[indice].id == event.target.id) {
            document.getElementById(event.target.id).className = 'rojo';
        } else { botones[indice].className = 'azul' }
    }
}