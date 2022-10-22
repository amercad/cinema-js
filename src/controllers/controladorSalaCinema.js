import { pintarFactura } from "../helpers/pintarFactura.js";
import { pintarSilla } from "../helpers/pintarSilla.js";

let asientos = [
    [
        {id: "a1", estado: 0}, {id: "b1", estado: 0}, {id: "c1", estado: 0}, {id: "d1", estado: 0}, {id: "e1", estado: 0}
    ],
    
    [
        {id: "a2", estado: 0}, {id: "b2", estado: 0}, {id: "c2", estado: 0}, {id: "d2", estado: 0}, {id: "e2", estado: 0}
    ],
    
    [
        {id: "a3", estado: 0}, {id: "b3", estado: 0}, {id: "c3", estado: 0}, {id: "d3", estado: 0}, {id: "e3", estado: 0}
    ]
];
let cinema = document.getElementById('salaCinema');
const limpiar = document.getElementById('limpiar');

limpiar.addEventListener('click', () => {

});

// Recorrer los asientos y aplicar traversing
const asientosOcupados = JSON.parse(localStorage.getItem("sillasOcupadas"));

if (asientosOcupados) {
    pintarSilla(Object.values(asientosOcupados), cinema);
    asientos = Object.values(asientosOcupados);
} else {
    pintarSilla(asientos, cinema);
}

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

    if (contadorSillaSeleccionada < 1) return;

    pintarFactura(cinema, asientos, contadorSillaSeleccionada);
    contadorSillaSeleccionada = 0;

});

limpiar.addEventListener('click', () => {
    localStorage.removeItem("sillasOcupadas");
    window.location.reload();
});