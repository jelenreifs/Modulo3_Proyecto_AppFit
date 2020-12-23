import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


import { useHistory } from "react-router-dom";


function Login() {
  const [data, setData] = useState([]);
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  

/* Modal */
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

/* History */
let history = useHistory();
const handleDashboard = () => history.push("/dashboard");

  

  const loginUser = () => { 
   
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({telefono:telefono, password:password}),
  })
     .then(res => res.json())
      .then(res => {
        if (res.error === true) {
          setMensaje(res.mensaje)
          handleShow()
          
          
        } else {
          setMensaje("")
          setData(res.usuario)
          handleDashboard()
       } 
     
       });
  }

  const handleChangeTfno = (e) => {
    setTelefono(e.target.value) 
  }

    const handleChangePassword = (e) => {
    setPassword(e.target.value) 
  }
  

  return (
    <section className="container-fuid bg-purple-900 d-flex justify-content-center login-wrapper">
      <div className="login">
        <div id="mensaje"></div>
        <div className="logo">
          <img src="./images/logo_bootFit.png" alt="logo"/>
        </div>
        <div className="row formulario">     
          <div className="col-md-12 form-group mb-5">
            <label className="form-label">Teléfono</label>
            <input type="text"
              className="form-control form-control-lg"
              id="telefono"
              placeholder="Teléfono"
              value={telefono}
              onChange={handleChangeTfno}
            />
          </div>
          <div className="col-md-12 form-group mb-5">
            <label className="form-label">Contraseña</label>
            <input type="password"
              className="form-control form-control-lg"
              id="contresenia"
              placeholder="Contraseña"
              value={password}
              onChange={handleChangePassword}
            />
        </div>
    </div>

      <div className="row">
        <div className="col-md-12">
            <Button variant="btn btn-primary btn-block" onClick={loginUser}>LOG IN</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ mensaje}</Modal.Title>
        </Modal.Header>
            </Modal>
            
          <div className="link d-flex justify-content-center">    
            <Link to="/registro">Nuevo registro</Link>
          </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Login;
