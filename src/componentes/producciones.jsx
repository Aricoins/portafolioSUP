import React from "react";
import '../styleSheets/producciones.css';

function Producciones(props){
    return ( 
    <div 
    className="contenedorPrincipal"> 
      <img className="imagenPort" 
      src={require(`../img/img${props.imagen}.png` )} 
      alt= "imagen proyecto" size= '50px' /> 
       <div className="contenedorProyecto">
        <p className="nombreProyecto">{props.nombre}</p>
        <p className="cargo">{props.cargo}</p>
        <p className="textoProduccion">{props.productos}</p>
      </div> 
    </div> 
)}

  
export default  Producciones 
 