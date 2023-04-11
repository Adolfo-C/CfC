var contador=0;
var contador2=0;
function incrementarClick() {resultado.innerHTML=(++contador)}
function borrarClick() {resultado.innerHTML=(contador=0)}
function incrementarClick2() {
    sumarClick(++contador2)
}
function sumarClick(contador2){
    document.getElementById('clicks').innerHTML=(contador2)
}
function borrarClick2() {
    sumarClick(contador2=0)
}