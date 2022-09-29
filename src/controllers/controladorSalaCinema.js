import { pintarSilla } from "../herper/pintarSilla.js";

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

const cinema = document.getElementById('salaCinema');

// Recorrer los asientos y aplicar traversing

pintarSilla(asientos, cinema);

cinema.addEventListener('click', (e) => {
    
    if (e.target.tagName=="IMG") {
        const idAsientoSeleccionado = e.target.id;
        // const reserva = asientos.find( id => id == idAsientoSeleccionado );
        // console.log(reserva);
        
        const estadoReserva = asientos.find( hileras => hileras.find( hilera => hilera.id === idAsientoSeleccionado ) )
        
     
        
        asientos.forEach(hilera => {
           
            
            hilera.forEach( asiento => {
                
                if (asiento.id === idAsientoSeleccionado) {
                    
                    if (asiento.estado === 0) {
                        asiento.estado = 1;
                        e.target.src = '../../assets/img/silla-de-cine-verde.png';
                
                    } else if(asiento.estado === 1) {
                        asiento.estado = 0;
                        e.target.src = '../../assets/img/silla-de-cine.png';
                    
                    }
                
                }
            
            })
            
        })
    }
    

});