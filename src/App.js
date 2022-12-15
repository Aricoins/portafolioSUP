import './App.css';
import Producciones from './componentes/producciones.jsx'
import Barra from './componentes/barra.jsx' 

function App() {
  return (
    <div className="App"><Barra/>
      <div>
       <h1 className="contenedor-principal"> Ariel García-Rogel</h1></div>
    <div>    
     <h4 className="subtitulo"> {">"} full stack developer </h4> </div>
     <br/><br/>
     <br/>
     <br/><br/><br/>
     <br/>
     <br/>
       <Producciones 
                    nombre='Nido de Palabras'
                    cargo='Creator'
                    productos='Audiovisual Productions'
                    imagen= '1' 
      />              
       <Producciones 
                    nombre='Bariloche2000'
                    cargo='Writer Publisher'
                    productos='News'
                    imagen= '2'
       />
         <Producciones 
                    nombre='Concejo Deliberante'
                    cargo='Parliamentary Management'
                    productos= 'Legal Regulations'
                    imagen= '3' 
       />
      
    </div>  );
}

export default App;
