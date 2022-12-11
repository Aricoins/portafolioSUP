import React from "react"
import '../../src/styleSheets/producciones.css'

function Producciones( ){
    return ( 
    <div className="contenedorPrincipal"> <img className="imagenPort" src={require('../img/img1.png')} alt= "NdP"/> 
    <div className="contenedorProyecto">
        <p className="nombreProyecto">Nido de Palabras | Producciones </p>
        <p className="cargo">Creador y desarrollador del proyecto</p>
        <p className=" Productora de contenidos audiovisuales con foco en Literatura"></p>
        <p className="textoProduccion">  Productora de contenidos audiovisuales con foco en Literatura</p>

        </div> 
    </div> 

    )
}

export default Producciones