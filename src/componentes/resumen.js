import Chart from "react-apexcharts";
import React, { useState, useEffect } from 'react';

function Resumen() {

     let series = [70] ; 
     
    let options= {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
            }
          },
        },
        labels: ["Objetivo"],
      }
    

  const [data, setData] = useState([]);
  const [chart, setChart] = useState(options);
  const [datosChart, setDatosChart] = useState(series);
  const [mostrarDatos, setMostrarDatos] = useState({ pasos:0,duracion:0, calorias:0 });


   useEffect(() => {
    fetch("http://localhost:3000/entrenamientos")
     .then(res => res.json())
       .then(res => {
         setData(res);
         setMostrarDatos({
          datosPasos: res[res.length - 1].pasos,
          datosDuracion: res[res.length - 1].duracion,
          datosCalorias: res[res.length - 1].calorias
  })
       });
 }, []);


  
//console.log(data)
//console.log(data[4].pasos)
//console.log(data[data.length-1].pasos)
 // console.log(data[data.length-1])
  


  return (
    <section className="col-xs-12 col-lg-6 mb-3 resumen">
      <div className="card card-dashboard bg-purple-800 rounded border border-primary">
        <div className="card-body">
          <div className="row">
              <div className="col-sm-8 grafico">
                <Chart
                  options={chart}
                  series={datosChart}
                  type="radialBar"
                  width="360"
                />
              </div>
            <div className="col-sm-4 card-text text-light">
              <dl>
                <dt>Pasos</dt>
                <dd>8000</dd>
                <dt>Duración</dt>
                <dd>120</dd>
                <dt>Calorías</dt>
                <dd>790</dd>
            </dl>
              
              </div>
           </div>

           <h5 className="card-title text-white mb-0">Actividad</h5>
         
        </div>
      </div>
    </section>
  )
}

export default Resumen;