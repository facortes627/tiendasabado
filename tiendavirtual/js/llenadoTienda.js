//Arreglo de objetos
let productos=[
    {foto:'img/img1.jpg',nombre:"Buso", precio:70000, descripcion:"YEOU Sudadera con capucha de anime japonés"},
    {foto:'img/img1.jpg',nombre:"Bolsa Anime", precio:35000, descripcion:"Juego de regalo de bolsa de anime que incluye mochila  con cordón, calcomanías, cordón, máscaras, llavero, collar, tarjetas de Lomo, pulseras, soporte para anillo de teléfono, pasadores de botón"},
    {foto:'img/img1.jpg',nombre:"Morral", precio:60000, descripcion:"Lanrena - Mochila de anime para estudiantes, impermeable, para viajes, adolescentes, portátil, Style A, L"},
    {foto:'img/img1.jpg',nombre:"Buso", precio:60000, descripcion:""},
    {foto:'img/img1.jpg',nombre:"Buso", precio:60000, descripcion:""},
    {foto:'img/img1.jpg',nombre:"Buso", precio:60000, descripcion:""},
    {foto:'img/img1.jpg',nombre:"Buso", precio:60000, descripcion:""},
    {foto:'img/img1.jpg',nombre:"Buso", precio:60000, descripcion:""},
    {foto:'img/img1.jpg',nombre:"Buso", precio:60000, descripcion:""},
    {foto:"../img/img1.jpg",nombre:"Buso", precio:60000, descripcion:""} 
]

//Recorriendo un arreglo con JS
//Buscar/Seleccionar/Escuchar
productos.forEach(function(producto){
    console.log("HELLO HOW ARE YOU")
})

//Escuchando clic en el boton 
let boton=document.getElementById("boton")

//Detectando el primer evento
boton.addEventListener("click",cambiarFoto)

//Creando una funcion
function cambiarFoto(){
    let foto_prueba=document.getElementById("foto_prueba")
    foto_prueba.src="../img/p10.jpg"
} 