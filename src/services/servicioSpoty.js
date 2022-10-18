const URI = 'https://api.spotify.com/v1/artists/4npEfmQ6YuiwW1GpUmaq3F/top-tracks?market=US';

const TOKEN = 'Bearer BQDAjor4U1q6SnNuoTJdOJ4VUCjmVxMyN6zH5w__aXyulvOyEuxwJY8IgJZgizH65MKV3l1423zOag5owTBuC_LEbYdGHGpadvkVMYAde7jm1Wek1LqhsCp4y1eW6pOABWZReITZLk1SeCo-mtUtrIIBXAtDseHBOknVav1q-KGW2DgHfjfMzn_invTP9MXusP8';

const peticion = {
    method: 'GET',
    headers: {
        'Authorization': TOKEN
    }
}

const fila = document.getElementById('fila');

fetch(URI, peticion)
    .then(respuesta => respuesta.json())
    .then(({tracks}) => {

        tracks.forEach(cancion => {
           const columna = document.createElement('div');
           columna.classList.add('col-6', 'my-3');
           
           const tarjeta = document.createElement('div');
           tarjeta.classList.add('card', 'h-100');
           
           const audio = document.createElement('audio');
           audio.setAttribute('controls', 'controls');
           audio.src = cancion.preview_url;
           
           const titulo = document.createElement('h5');
           titulo.classList.add('text-center')
           titulo.textContent = cancion.name;
           
           tarjeta.appendChild(titulo);
           tarjeta.appendChild(audio);
           columna.appendChild(tarjeta);
           fila.appendChild(columna);
           
           
        });
        
    }).catch(console.error);