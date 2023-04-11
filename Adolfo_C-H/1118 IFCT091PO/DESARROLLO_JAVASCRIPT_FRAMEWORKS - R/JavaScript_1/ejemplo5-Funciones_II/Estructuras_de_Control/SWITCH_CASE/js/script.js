

function genero() {
    var sexo = window.prompt('Cual es tu género definido: ');

    switch (sexo.toLocaleLowerCase()) {
        case 'hombre':
            swal('Estás dentro del colectivo heterosexual')
            break;
        case 'mujer':
            swal('Estás dentro del colectivo heterosexual')
            break;
        case 'transgenero':
            swal('Estás dentro del colectivo transexual')
            break;
        case 'fluido':
            swal('Estás dentro del colectivo pansexual')
            break;
        case 'binario':
            swal('Estás dentro del colectivo homosexual')
            break;

        default:
            swal('Perteneces a otro colectivo no identificado aquí')
            break;
    }

}