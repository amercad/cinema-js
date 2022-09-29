export const pintarSilla = (asientos, cinema) => {
    asientos.forEach(hilera => { 
        const fila = document.createElement('div');
        fila.classList.add('row');
        
        hilera.forEach(asiento => {
            
            const columna = document.createElement('div');
            columna.classList.add('col-3');
            
            const fotoSilla = document.createElement('img');
            fotoSilla.classList.add('img-fluid', 'w-100');
            fotoSilla.setAttribute('id', asiento.id);
            
            if (asiento.estado  === 0) {
                fotoSilla.src = "../../assets/img/silla-de-cine.png";
            } else if (asiento.estado === 1) {
                fotoSilla.src = "../../assets/img/silla-de-cine-verde.png";
            } else {
                fotoSilla.src = "../../assets/img/silla-de-cine-rojo.png";
            }
            
            columna.appendChild( fotoSilla );
            fila.appendChild(columna);
        
        })
        
        cinema.appendChild(fila);
    });
}