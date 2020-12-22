import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Registro() {
const [data, setData] = useState([]);
const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [telefono, setTelefono] = useState("");
const [password, setPassword] = useState("");
const [objetivo, setObjetivo] = useState("");
  

const registerUser = () => { 
   // fetch("http://localhost:3000/entrenamientos")
    fetch("http://localhost:3000/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({nombre:nombre, apellido:apellido, telefono:telefono, password:password, objetivo:objetivo}),
  })
     .then(res => res.json())
       .then(res => {
        setData(res);
       });
  }

 const handleChangeNombre = (e) => {
    setNombre(e.target.value) 
  }

const handleChangeApellido = (e) => {
    setApellido(e.target.value) 
  }
    
const handleChangeTfno = (e) => {
    setTelefono(e.target.value) 
  }

 const handleChangePassword = (e) => {
    setPassword(e.target.value) 
    }

const handleChangeObjetivo = (e) => {
    setObjetivo(e.target.value) 
  }
  


  return (
    <section className="container-fuid bg-purple-900 d-flex justify-content-center registro-wrapper">
      <div className="registro">
        <div id="mensaje"></div>
        <div className="logo">
          <img src="./images/logo_bootFit.png" alt="logo"/>
        </div>
        <div className="row formulario">     
            <div className="col-md-12 form-group mb-2">
                <label className="form-label">Nombre</label>
                <input type="text"
                    className="form-control form-control-lg"
                    id="nombre"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                  />
            </div>
            <div className="col-md-12 form-group mb-2">
                <label className="form-label">Apellido</label>
                <input type="text"
                    className="form-control form-control-lg"
                    id="apellido"
                    placeholder="Apellido"
                    value={apellido}
                    onChange={handleChangeApellido}
                />
            </div>
                                
            <div className="col-md-12 form-group mb-2">
                <label className="form-label">Teléfono</label>
                    <input type="text"
                        className="form-control form-control-lg"
                        id="telefono"
                        placeholder="Telefono"
                        value={telefono}
                        onChange={handleChangeTfno}
                    />
            </div>
                                
            <div className="col-md-12 form-group mb-2">
                <label className="form-label">Password</label>
                    <input type=""
                        className="form-control form-control-lg"
                        id="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={handleChangePassword}
                    />
            </div>
                                
            <div className="col-md-12 mb-2">
                <label className="form-label">Objetivo</label>
                <div className="input-group">
                    <input type="text"
                    className="form-control"
                    placeholder="Objetivo"
                    value={objetivo}
                    onChange={handleChangeObjetivo}
                    />
                    <div className="input-group-append">
                        <span className="input-group-text">nº pasos</span>
                    </div>
                </div>
        </div>
         </div>
        
        <div className="row">
            <div className="col-md-12">
              <Link to="/">
                 <button onClick={registerUser} className="btn btn-primary btn-block">REGISTRAR</button>
              </Link>
            </div>
        </div>
        </div>
 
  </section>
      
    
  )
}

export default Registro;