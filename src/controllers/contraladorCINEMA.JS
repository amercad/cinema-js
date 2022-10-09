
import {peliculas} from '../helpers/baseDatos.js'
import { estrenos } from '../helpers/baseDatos2.js'
import { pintarPeliculas } from '../helpers/pintarPeliculas.js'

 // recorriendo un arreglo en js

 let fila=document.getElementById("fila")
 let fila2=document.getElementById("fila2")


     pintarPeliculas(peliculas,fila)
     pintarPeliculas(estrenos,fila2)

 // detectando seleccion de una pelicula 
 let peliculaSeleccionada={
    
 }
 fila.addEventListener("click",function(evento){
        console.log(evento.target.parentElement)
        peliculaSeleccionada.poster=(evento.target.parentElement.querySelector('img').src)
        peliculaSeleccionada.nombre=(evento.target.parentElement.querySelector('h3').textContent)
        peliculaSeleccionada.genero=(evento.target.parentElement.querySelectorAll('p')[0].textContent)
        peliculaSeleccionada.sipnosis=(evento.target.parentElement.querySelectorAll('p')[1].textContent)
        peliculaSeleccionada.duracion=(evento.target.parentElement.querySelectorAll('p')[2].textContent)
        peliculaSeleccionada.actores=(evento.target.parentElement.querySelectorAll('p')[3].textContent)
        peliculaSeleccionada.director=(evento.target.parentElement.querySelectorAll('p')[4].textContent)
        peliculaSeleccionada.clasificacion=(evento.target.parentElement.querySelectorAll('p')[5].textContent)
        peliculaSeleccionada.idioma=(evento.target.parentElement.querySelector('h6').textContent)
        console.log(peliculaSeleccionada)

        //llamando a la memoria del navegador

        localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada))
   
//  Redireccionaa otra vista
        window.location.href="./src/views/ampliarinfopelicula.html"
 })

 fila2.addEventListener("click",function(evento){
    console.log(evento.target.parentElement)
    peliculaSeleccionada.poster=(evento.target.parentElement.querySelector('img').src)
    peliculaSeleccionada.nombre=(evento.target.parentElement.querySelector('h3').textContent)
    peliculaSeleccionada.genero=(evento.target.parentElement.querySelectorAll('p')[0].textContent)
    peliculaSeleccionada.sipnosis=(evento.target.parentElement.querySelectorAll('p')[1].textContent)
    peliculaSeleccionada.duracion=(evento.target.parentElement.querySelectorAll('p')[2].textContent)
    peliculaSeleccionada.actores=(evento.target.parentElement.querySelectorAll('p')[3].textContent)
    peliculaSeleccionada.director=(evento.target.parentElement.querySelectorAll('p')[4].textContent)
    peliculaSeleccionada.clasificacion=(evento.target.parentElement.querySelectorAll('p')[5].textContent)
    peliculaSeleccionada.idioma=(evento.target.parentElement.querySelector('h6').textContent)
    console.log(peliculaSeleccionada)

    //llamando a la memoria del navegador

    localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada))

//  Redireccionaa otra vista
    window.location.href="./src/views/ampliarinfopelicula.html"
})
