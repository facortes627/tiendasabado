//Arreglo de objetos
let productos=[
    {foto:'img/img1.jpg',nombre:"Buso", precio:70000, descripcion:"YEOU Sudadera con capucha de anime japonés"},
    {foto:'img/img1.jpg',nombre:"Bolsa Anime", precio:35000, descripcion:"Juego de regalo de bolsa de anime que incluye mochila  con cordón, calcomanías, cordón, máscaras, llavero, collar, tarjetas de Lomo, pulseras, soporte para anillo de teléfono, pasadores de botón"},
    {foto:'img/img1.jpg',nombre:"Morral", precio:60000, descripcion:"Lanrena - Mochila de anime para estudiantes, impermeable, para viajes, adolescentes, portátil, Style A, L"},
    {foto:'img/img1.jpg',nombre:"Buso", precio:60000, descripcion:""},
    {foto:'img/img1.jpg',nombre:"Buso", precio:60000, descripcion:""},
    {foto:'img/img1.jpg',nombre:"Buso", precio:60000, descripcion:""},
    {foto:'img/img1.jpg',nombre:"cosa", precio:60000, descripcion:""},
    {foto:'img/img1.jpg',nombre:"Buso", precio:60000, descripcion:""},
    {foto:'img/img1.jpg',nombre:"Buso", precio:60000, descripcion:""},
    {foto:'img/img1.jpg',nombre:"Buso", precio:60000, descripcion:""} 
]

//Creo la referencia al componente padre
//Creo una variable para almacenar la base sobre la cual voy a pintar
let fila=document.getElementById("fila")

//Recorrer array
//forEach
productos.forEach(function(producto){
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.foto)

//Receta para pintar con js 

//1. Comience a crear la extructura que necesita

//creo la columna
let columna=document.createElement("div")
columna.classList.add("col")

//creo la tarjeta
let tarjeta=document.createElement("div")
tarjeta.classList.add("card")
tarjeta.classList.add("h-100")

//creo la imagen
let foto=document.createElement("img")
foto.classList.add("card-img-top")
foto.src=producto.foto

//2. Ordenar la estructura
//Padres e hijos

tarjeta.appendChild (foto)
columna.appendChild (tarjeta)
fila.appendChild(columna)
})