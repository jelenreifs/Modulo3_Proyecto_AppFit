//import history from './history';

import Login from "./componentes/login";
import Registro from "./componentes/registro";
import Cabecera from "./componentes/cabecera";
import Cabecera2 from "./componentes/cabecera2";
import Footer from "./componentes/footer";
import Pasos from "./componentes/pasos";
import Suenio from "./componentes/suenio";
import Resumen from "./componentes/resumen";
import Sidebar from "./componentes/sidebar";
import Seguimiento from "./componentes/seguimiento";




import React, { useState } from 'react';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'

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
    <BrowserRouter>
    
      <Route exact path="/">
        <Login />
      </Route>

      <Route exact path="/registro">
        <Registro />
      </Route>

      <Route exact path="/dashboard">
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
      </Route>

      <Route exact path="/seguimiento">
          <div className={clase} id="wrapper" >
          <Sidebar />
          <div id="page-content-wrapper">
            <Cabecera2 cambiarClase={handleChange}/>
              <main>
                <Seguimiento />
              </main>
            <Footer />
          </div>
        </div>
      </Route>
        

 
    </BrowserRouter>
  )
   
}

export default App;