export function pintarPeliculas(peliculas,fila){
    
 peliculas.forEach(function(pelicula){
    // console.log(pelicula)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)


    
    // // TRAVERSING (CREAR ETIQUETAS DE HTML DESDE JS)
    // let poster=document.createElement("img")
    // poster.src=pelicula.poster
  

    // let nombre=document.createElement("h3")
    // nombre.textContent=pelicula.nombre

    // // padres e hijos
    // fila.appendChild(poster)
    // fila.appendChild(nombre)

    // 1.creamos una columna para casa pelicula

    let columna=document.createElement("div")
    columna.classList.add("col")

    //2 creamos una card para cada pelicula

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

    // 3 creamos una foto para cada pelicula

    let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=pelicula.poster

    // 4 creamos el nombre de la pelicula
    let nombre =document.createElement("h3")
    nombre.classList.add("card-title","text-center")
    nombre.textContent=pelicula.nombre

    // 5  creamos el genero de cada pelicula 

    let genero=document.createElement("p")
    genero.classList.add("text-start")
    genero.textContent="Genero: "+ pelicula.genero

    //6 creamos el idioma de cada pelicula 

    let idioma =document.createElement("h6")
    idioma.classList.add("fw-bold")
    idioma.textContent= "Idioma: "+pelicula.idioma

    // 7  creamos la sipnosis

    let sipnosis=document.createElement("p")
    sipnosis.classList.add("d-none")
    sipnosis.textContent="Sipnosis: "+pelicula.sinopsis

    // crear la duracion
     let duracion=document.createElement("P")
     duracion.classList.add("text-left","tamano")
     duracion.textContent="Duracion: "+pelicula.duracion

     // crear acores
     let Actores=document.createElement("P")
     Actores.classList.add("text-left","tamano")
     Actores.textContent="Actores: "+pelicula.actores

     // creamos director

     let director=document.createElement("P")
     director.classList.add("text-left","tamano")
     director.textContent="Director: "+pelicula.director

     // clasificacion
      
      let clasificacion=document.createElement("P")
      clasificacion.classList.add("text-left","tamano","fw-bold")
      clasificacion.textContent="Clasificacion: "+pelicula.clasificacion




      // // padres e hijos
       tarjeta.appendChild(poster)
       tarjeta.appendChild(nombre)
       tarjeta.appendChild(genero)
       tarjeta.appendChild(idioma)
       tarjeta.appendChild(sipnosis)
       tarjeta.appendChild(duracion)
       tarjeta.appendChild(Actores)
       tarjeta.appendChild(director)
       tarjeta.appendChild(clasificacion)
       columna.appendChild(tarjeta)
       fila.appendChild(columna)



 })
}