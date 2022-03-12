//IMPORTANDO MODULOS
import { pintarTienda } from "./llenadoTienda.js"
import {ampliarInformacion} from "./ampliarInfo.js"
//Llamando al modulo de pintar
pintarTienda()

//Llamando al modulo ampliar info
let contendorTienda= document.getElementById("fila")
contendorTienda.addEventListener("click", function(event){
   
    let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))    
    ampliarInformacion(event)
    modalinfo.show()
})