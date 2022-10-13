const URI = 'https://api.spotify.com/v1/artists/4npEfmQ6YuiwW1GpUmaq3F/top-tracks?market=US';

const TOKEN = 'Bearer BQAuqwknZv0Fxfgnjp-17vEZA_8T5sDHJgAgd0LcacxjYfzjC-YMDD7zfWm8gr6fUYzffZ7MTVsPDVgTuezxAoRcrKBx_0IpDmi8WZ1YfDflBtPqAZHp18Z9NAeI3tg1Mw9nZ3FoY1HjUCzpG5_-jowpPcAfZV8kYkFvi2y2eMc9aKrL5K5l_QM4E4KeqxlbCxw';

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