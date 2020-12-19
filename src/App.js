import Cabecera from "./componentes/cabecera";
import Footer from "./componentes/footer";
import Pasos from "./componentes/pasos";
import Suenio from "./componentes/suenio";
import Resumen from "./componentes/resumen";
import Sidebar from "./componentes/sidebar";

import React, { useState } from 'react';


import './App.css';


function App() {
  const [ clase, setClase ] = useState("d-flex bg-purple-900");
  
   const handleChange = (e) => { 
      e.preventDefault();
      if (clase === "d-flex bg-purple-900 toggled") {
        setClase("d-flex bg-purple-900")
      } else {
          setClase("d-flex bg-purple-900 toggled")
       }
   
    } 
  


  return (
    <div className={clase} id="wrapper" >
      <Sidebar />
      <div id="page-content-wrapper">
        <Cabecera cambiarClase={handleChange}/>
        <main>
          <Resumen />
          <Pasos />
          <Suenio />
        </main>
         <Footer />
      </div>
      
     
  
    </div>
  )
   
}

export default App;