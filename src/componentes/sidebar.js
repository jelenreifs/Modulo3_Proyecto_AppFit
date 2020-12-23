import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import moment from 'moment';
import "moment-precise-range-plugin";


function Sidebar() {

 

/*********************************************/ 
/*           INICIAR ENTRENAMIENTO           */
/*********************************************/ 
  
  /* Select Actividad */
  const [dataActividad, setDataActividad] = useState([]);

/* Select Intensidad */
   const [dataIntensidad, setDataIntensidad] = useState([]);
  
  
  /* Post Entrenamiento */
  const [dataEntrenamiento, setDataEntrenamiento] = useState([]);
  const [actividad, setActividad] = useState("");
  const [intensidad, setIntensidad] = useState("");
  const [duracion, setDuracion] = useState("");


/*********************************************/ 
/*               INICIAR SUEÑO               */
/*********************************************/
  
   moment().format();

  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');

   const [tiempoTotal, setTiempoTotal] = useState('');





/* Post Sueño */
   const [dataSuenio, setDataSuenio] = useState([]);
 
  
 /*********************************************/ 
/*                   MODAL                    */
/*********************************************/  
const [mensaje, setMensaje] = useState("");

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


 /* Cargar dinamicamente el selects de actividad */
  useEffect(() => {
    fetch("http://localhost:3000/activities")
      .then(res => res.json())
      .then(res => {
        setDataActividad(res);
        setDataIntensidad(res);
      });
  }, []);
  
 
  const mostrarActividad = dataActividad.map((item, index) => {
    return (
      <option key={index} value={item.actividad}>{item.actividad}</option>
    )
  })
  

  /* REGISTRAR ACTIVIDAD*/
const addActividad = () => { 
    fetch("http://localhost:3000/entrenamientos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({actividad:actividad, intensidad:intensidad, duracion:duracion}),
  })
     .then(res => res.json())
      .then(res => {
        if (res.error === true) {
          setMensaje(res.mensaje)
          handleShow()
          
        } else {
          //setMensaje("")
        setMensaje(res.mensaje)
        setDataEntrenamiento(res);
        handleShow()
       }  
       });
  }


 const handleChangeActividad = (e) => {
    setActividad(e.target.value) 
  }

const handleChangeIntensidad = (e) => {
    setIntensidad(e.target.value) 
  }
    
const handleChangeDuracion = (e) => {
    setDuracion(e.target.value) 
  }


/* REGISTRAR SUEÑO*/
  
const addSuenio = () => { 

    fetch("http://localhost:3000/dreams/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({horaInicio:startHour, horaFin:endHour, horasTotal:totalFormat})
  })
     .then(res => res.json())
      .then(res => {
          if (res.error === true) {
          setMensaje(res.mensaje)
          handleShow()
          
        } else {
          //setMensaje("")
        setMensaje(res.mensaje)
        setDataSuenio(res);
        handleTotal()
        handleShow()
       }  
       });
  }


  const handleChangeDate1 = (e) => { 
    setStartDate(e.target.value)
  }

    const handleChangeDate2 = (e) => { 
    setEndDate(e.target.value)
  }

    const handleChangeHour1 = (e) => { 
    setStartHour(e.target.value)
  }

    const handleChangeHour2 = (e) => { 
    setEndHour(e.target.value)
  }


  const handleTotal = () => { 
    //setTiempoTotal(moment(`${startDate} ${startHour}`).preciseDiff(`${endDate} ${endHour}`))
    setTiempoTotal(moment(`${startDate} ${startHour}`, true).preciseDiff(`${endDate} ${endHour}`, true))
  }


  const totalFormat = `${parseInt(tiempoTotal.hours)}.${parseInt(tiempoTotal.minutes)}`;
  console.log(totalFormat)


  return (
    <section className="bg-purple-100" id="sidebar-wrapper">
        
    <div className="list-group container">
        
        <div className="form-entrenamiento mb-5">
          <h5>Entrenamiento</h5>
          <div className="mb-3 form-group">
            <label htmlFor="Actividad" className="form-label">Actividad</label>
            <select className="custom-select" aria-label="Actividad" id="Actividad" onChange={ handleChangeActividad }>
            { mostrarActividad }
            </select>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="Intensidad" className="form-label">Actividad</label>
            <select className="custom-select" aria-label="Intensidad" id="Intensidad" onChange={ handleChangeIntensidad }>
              <option value="intensivo">Intensivo</option>
              <option value="moderado">Moderado</option>
              <option value="suave">Suave</option>
            </select>
          </div>
          <div className="mb-3">
              <label htmlFor="Duracion" className="form-label">Duración</label>
              <div className="input-group">
              
              <input type="text" className="form-control" placeholder="Tiempo entrenamiento" onChange={ handleChangeDuracion } />
              <div className="input-group-append">
                <span className="input-group-text">minutos</span>
            </div>
                
            </div>
          </div>
            
          <Button variant="btn btn-primary btn-block" onClick={addActividad}>INICIAR ENTRENAMIENTO</Button>
        </div>


        <div className="form-suenio mb-5">
          <h5>Registro sueño</h5>
          <div className="row">
            <div className="col-sm-7 form-group">
              <label htmlFor="startDate" className="form-label">Inicio <span>Día</span></label>
              <input type="date" id="startDate" className="form-control" value={ startDate } onChange={ handleChangeDate1} required/>
            </div>
            
           <div className="col-sm-5 form-group">
            <label htmlFor="startHour" className="form-label"><span>Hora</span></label>
              <input type="time" id="startHour" className="form-control" value={ startHour } onChange={ handleChangeHour1} required />
            </div>
          
          </div>


           <div className="row">
            <div className="col-sm-7 form-group">
              <label htmlFor="endDate" className="form-label">Fin <span>Día</span></label>
              <input type="date" id="endDate" className="form-control" value={ endDate } onChange={ handleChangeDate2} required/>
            </div>
            
           <div className="col-sm-5 form-group">
            <label htmlFor="endtHour" className="form-label"><span>Hora</span></label>
              <input type="time" id="endHour" className="form-control" value={ endHour } onChange={ handleChangeHour2} required />
            </div>
          
          </div>

          <Button variant="btn btn-primary btn-block" onClick={addSuenio}>REGISTRAR SUEÑO</Button>
          </div>
      </div>
      
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{ mensaje }</Modal.Title>
          </Modal.Header>
        </Modal>
      
    </section>
  )
}

export default Sidebar;