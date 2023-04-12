var mapa;
function mostrarMapa() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError)
    } else {
        alert('Tu dispositivo o navegador no accede a la geolocalizacion')
    }
    var opciones = {
        zoom: 12,
        mapTypeid: google.maps.MapTypeId.ROADMAP
    };
    mapa = new google.maps.Map(document.getElementById('resultado'), opciones);
}
function mostrarLocalizacion() {
    var pos = new google.maps.LatLng(40.4348589, -3.6541705);
    var info = new google.maps.InfoWindow({
        map: mapa,
        position: pos,
        content: 'CFC formacion'
    });
    var marker = new google.maps.Marker({
        map: mapa,
        position: { lat: 40.4348589, lng: -3.6541705 },
        title: 'CFC formacion'
    });mapa.setCenter(pos);
}
function manejarError(error) {

    switch (error.code) {
        case error.PERMISION_DENIED:
            alert('Permiso denegado');
            break;

        case error.TIME_OUT:
            alert('Tiempo excedido de espera...');
            break;

        case error.POSITION_UNAVAILABLE:
            alert('Posicion indeterminada');
            break;

        case error.UNKNOWN:
            alert('Error desconocido');
            break;

        default: alert('Error de desconexión')
            break;
    }
}