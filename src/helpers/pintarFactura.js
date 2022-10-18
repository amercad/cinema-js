import { pintarSilla } from "./pintarSilla.js";

export const pintarFactura = (cinema, asientos, contadorSillaSeleccionada) => {
    const puestos = [];
    cinema.innerHTML = "";

    
    asientos.map(hilera => {
        
        
        hilera.forEach( asiento => {
            
            if (asiento.estado === 1) {
                asiento.estado = 2;
                puestos.push( asiento.id );
                
            }
            
        })
        
    });

    
   let precioBoleta = 12000;
   const peliculaSeleccionada = JSON.parse(localStorage.getItem("peliculaSeleccionada"));

    reservaSala.innerHTML = '';
    reservaSala.classList.add('card');
    const divHeader = document.createElement('div');
    divHeader.classList.add('card-header', 'bg-info', 'text-white', 'text-uppercase');

    divHeader.textContent = 'Factura';

    const divListGroud= document.createElement('div');
    divListGroud.classList.add('list-group', 'list-group-flush');

    const divNombrePelicula = document.createElement('li');
    divNombrePelicula.classList.add('list-group-item');
    divNombrePelicula.textContent = 'Película: ' + peliculaSeleccionada.nombre;

    const divPrecio = document.createElement('li');
    divPrecio.classList.add('list-group-item');

    divPrecio.textContent = `Precio de la boleta: ${precioBoleta}`;

    const cantidadBoleta = document.createElement('li');
    cantidadBoleta.classList.add('list-group-item');

    const numeroPuesto = document.createElement('li');
    numeroPuesto.classList.add('list-group-item');
    numeroPuesto.textContent = 'asientos seleccionado: ' + puestos.join(', ')

    cantidadBoleta.textContent = `Cantidad boleta: ${ contadorSillaSeleccionada }`;

    const totalPago = document.createElement('li');
    totalPago.classList.add('list-group-item');
    

    totalPago.textContent = `Total: ${ contadorSillaSeleccionada * precioBoleta }`;


    divListGroud.appendChild(divNombrePelicula);
    divListGroud.appendChild(divPrecio);
    divListGroud.appendChild(cantidadBoleta);
    divListGroud.appendChild(numeroPuesto);
    divListGroud.appendChild(totalPago);
    reservaSala.appendChild(divHeader);
    reservaSala.appendChild(divListGroud);

    pintarSilla(asientos, cinema);
    
}