function aplicarCupon() {
    var cupon = document.getElementById('cupon').value;
    var respuesta = document.getElementById('resultado');
    var precio = 1000000;
    switch (cupon) {
        case 'PLUSGOLDEN':
            nuevoPvp = precio - (precio * 0.15);
            respuesta.innerHTML = 'Gran descuento del 15%' + '( ' + (precio * 0.15) + '€)' + 'Total:' + nuevoPvp + '€';
            break;

        case 'DELUXE':
            precio = precio - (precio * 0.19);
            respuesta.innerHTML = 'Gran descuento del 19%: ' + precio;
            break;

        case 'PREMIUM':
            precio = precio - (precio * 0.20);
            respuesta.innerHTML = 'Gran descuento del 20%: ' + precio;
            break;

        default:
            respuesta.innerHTML = 'Cupón incorrecto';
            break;
    }
}

/* 
16: 39
Martin Sanchez
para Todos
function aplicarCupon() {
    var cupon = document.getElementById('cupon').value;
    var respuesta = document.getElementById('resultado');
    var descuento;
    var total;
    switch (cupon) {
        case 'PLUSGOLDEN':
            descuento = 1000000 * 0.15;
            total = 1000000 - descuento;
            respuesta.innerHTML = 'Gran descuento del 15%:' + total + '€'
            break;
        case 'DELUXE':
            descuento = 1000000 * 0.19;
            total = 1000000 - descuento;
            respuesta.innerHTML = 'Gran descuento del 19%:' + total + '€'
            break;
        case 'PREMIUM':
            descuento = 1000000 * 0.20;
            total = 1000000 - descuento;
            respuesta.innerHTML = 'Gran descuento del 20%:' + total + '€'
            break;

        default:
            break;
    }
} */