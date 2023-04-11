/* .value */
function entrar() {
    var Nombre=document.getElementById('nombre').value;
    var Apellido=document.getElementById('apellido').value;
    var eMail=document.getElementById('email').value;
    document.getElementById('resultado').innerHTML=
    'AUTORIZADO '+Nombre+' '+Apellido+' con e-mail: '+eMail;
}