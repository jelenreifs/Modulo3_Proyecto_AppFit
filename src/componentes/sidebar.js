import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';

import "react-datepicker/dist/react-datepicker.css";


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

  

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [value, onChange] = useState('');

/* Post Sueño */
   const [dataSuenio, setDataSuenio] = useState([]);
 


 /* Cargar dinamicamente el selects de actividad */
  useEffect(() => {
    fetch("http://localhost:3000/activities")
      .then(res => res.json())
      .then(res => {
        setDataActividad(res);
        setDataIntensidad(res);
        console.log(res)
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
        setDataEntrenamiento(res);
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



/* const renderDayContents = (day, date) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return <span title={tooltipText}>{getDate(date)}</span>;
  }; */




/* REGISTRAR SUEÑO*/
  
const addSuenio = () => { 

    fetch("/dreams/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({startDay:startDate, endDay:endDate}),
  })
     .then(res => res.json())
       .then(res => {
        setDataSuenio(res);
       });
  }



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
            
        <button type="text" className="btn btn-primary btn-block" onClick={addActividad}>INICIAR ENTRENAMIENTO</button>
        </div>




        <div className="form-entrenamiento mb-5">
          <h5>Registro sueño</h5>

          <div className="row">
              <div className="col-sm-6 form-group">
                  <label htmlFor="start" className="form-label">Inicio día</label>
                  <DatePicker id="start" className="form-control"
                      selected={startDate}
                      onChange={date => setStartDate(date)}  />
            </div>
            
               <div className="col-sm-6 mb-3 form-group">
                  <label htmlFor="startTime" className="form-label">Inicio hora</label>
                  <TimePicker  id="startTime" onChange={onChange} value={value} />
              </div>
             
          </div>


            <div className="row">
              <div className="col-sm-6 form-group">
                  <label htmlFor="start" className="form-label">Final día</label>
                  <DatePicker id="start" className="form-control"
                      selected={endDate}
                      onChange={date => setStartDate(date)}  />
            </div>
            
               <div className="col-sm-6 mb-3 form-group">
                  <label htmlFor="startTime" className="form-label">Final hora</label>
                  <TimePicker  id="startTime" onChange={onChange} value={value} />
              </div>
             
          </div>

 
        
            
          <button type="text" className="btn btn-primary btn-block" onClick={addSuenio}>REGISTRAR SUEÑO</button>
          </div>

        
          
        

          

    
        
    </div>
     
    </section>
  )
}

export default Sidebar;