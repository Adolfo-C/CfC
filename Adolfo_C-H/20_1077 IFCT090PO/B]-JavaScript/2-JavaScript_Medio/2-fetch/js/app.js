document.getElementById('api').addEventListener('click', cargarApi);
function cargarApi() {
    fetch('https://picsum.photos/v2/list').then(traer => traer.json()).then(imagenes => {
        console.log(imagenes)
        let html = ``;
        imagenes.forEach(imagen => {
            html += `
        <ul class="list-group">
         <li class="list-group-item"
         <h5>Autor: ${imagen.author}</h5><br>
         <img src="${imagen.download_url}"/><br>
         <a class="btn btn-outline-primary" href="${imagen.url}">Descarga</a><br>
         </li>
        </ul>
        `;
        });
        document.getElementById('resultado').innerHTML = html;
    })
}