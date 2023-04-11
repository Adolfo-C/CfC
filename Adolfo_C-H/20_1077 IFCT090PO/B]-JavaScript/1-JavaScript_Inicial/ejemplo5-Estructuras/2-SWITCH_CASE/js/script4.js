function ejecutar() {
    var opcion = parseInt(document.getElementById('opcion').value);
    var respuesta = document.getElementById('resultado');

    switch (opcion) {
        case 1:
            respuesta.innerHTML = 'FORMATEANDO DISCO, espere...'
            break;
        case 2:
            respuesta.innerHTML = 'RECOPILANDO DATOS PARA SU DESTRUCCIÓN, por favor espere...'
            break;
        case 3:
            respuesta.innerHTML = 'BUSCANDO UBICACIÓN PARA VOLCADO DE DATOS E ip, espere...'
            break;
        case 4:
            respuesta.innerHTML = 'MONITORIZANDO NAVEGADOR, espere...' +'<br>'+ navigator.userAgent;
            break;
        case 5:
            respuesta.innerHTML = 'FORMATEANDO DISCO, espere...'
            break;
        default:
            respuesta.innerHTML = 'Es necesario elegir una de las opciones'
            break;
    }
}