export function ampliarInformacion(event){

    let producto={}
    if(event.target.classList.contains("btn")){
      
        producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("label").textContent

        }
        console.log(producto)
        
        //Asociando los valores respectivos al nodal
        let foto=document.getElementById("fotoinfo")
        foto.src=producto.foto
        let nombre=document.getElementById("nombreinfo")
        nombre.textContent=producto.nombre
    }

}