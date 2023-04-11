x = null;
function encenderReloj() { x = !x; reloj() }
function reloj() {
    if (x) {
        t = setInterval(function () {
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            resultado.innerHTML = new Date().toLocaleTimeString();
            document.querySelector(".hours").style.transform = 'rotate(' + 30 * h + 'deg)';
            document.querySelector(".minutes").style.transform = 'rotate(' + 6 * m + 'deg)';
            document.querySelector(".seconds").style.transform = 'rotate(' + 6 * s + 'deg)';
        }, 1000);
    } else { clearTimeout(t) }
}