import { pintarSilla } from "../helpers/pintarSilla.js";

const asientos = [
    [
        {id: "a1", estado: 0}, {id: "b1", estado: 0}, {id: "c1", estado: 0}, {id: "d1", estado: 0}
    ],
    
    [
        {id: "a2", estado: 0}, {id: "b2", estado: 2}, {id: "c2", estado: 0}, {id: "d2", estado: 0}
    ],
    
    [
        {id: "a3", estado: 0}, {id: "b3", estado: 0}, {id: "c3", estado: 2}, {id: "d3", estado: 0}
    ]
];
let cinema = document.getElementById('salaCinema');
const reservaSala = document.getElementById('reservaSala');

// Recorrer los asientos y aplicar traversing

pintarSilla(asientos, cinema);

let contadorSillaSeleccionada = 0;

cinema.addEventListener('click', (e) => {
    
    if (e.target.tagName=="IMG") {
        const idAsientoSeleccionado = e.target.id;
        // const reserva = asientos.find( id => id == idAsientoSeleccionado );
        // console.log(reserva);
        
     
        
        asientos.forEach(hilera => {
           
            
            hilera.forEach( asiento => {
                
                if (asiento.id === idAsientoSeleccionado) {
                    
                    if (asiento.estado === 0) {
                        asiento.estado = 1;
                        e.target.src =  '../../assets/img/silla-de-cine-verde.png';
                        contadorSillaSeleccionada++;
                    } else if(asiento.estado === 1) {
                        asiento.estado = 0;
                        e.target.src = '../../assets/img/silla-de-cine.png';
                        contadorSillaSeleccionada--;
                    }
                
                }
            
            })
            
        })
    }

});

const reserva = document.getElementById('reserva');

reserva.addEventListener('click', () => {

    const puestos = [];
    cinema.innerHTML = "";

    
    asientos.forEach(hilera => {
        
        
        hilera.forEach( asiento => {
            
            if (asiento.estado === 1) {
                asiento.estado = 2;
                puestos.push( asiento.id );
                
            }
            
        })
        
    });
    
   let precioBoleta = 12000;

    reservaSala.innerHTML = '';
    reservaSala.classList.add('card');
    const divHeader = document.createElement('div');
    divHeader.classList.add('card-header', 'bg-info', 'text-white', 'text-uppercase');

    divHeader.textContent = 'Factura';

    const divListGroud= document.createElement('div');
    divListGroud.classList.add('list-group', 'list-group-flush');

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


    divListGroud.appendChild(divPrecio);
    divListGroud.appendChild(cantidadBoleta);
    divListGroud.appendChild(numeroPuesto);
    divListGroud.appendChild(totalPago);
    reservaSala.appendChild(divHeader);
    reservaSala.appendChild(divListGroud);

    pintarSilla(asientos, cinema);
    contadorSillaSeleccionada = 0;


});