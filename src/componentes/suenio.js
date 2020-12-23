
import Chart from "react-apexcharts";
import React, { useState, useEffect } from 'react';

function Suenio() {

  let series = [{
    name: 'Sueño',
    data: [],
  }] ; 


let options = {
      chart: {
        height: 240,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
  };
  
  const [data, setData] = useState([]);
  const [chart, setChart] = useState(options);
  const [datosChart, setDatosChart] = useState(series);

   useEffect(() => {
    fetch("http://localhost:3000/dreams")
     .then(res => res.json())
      .then(res => {
        const mostrarSuenio = res.map(item => item.horasTotal)
        setDatosChart([{
          name: 'Sueño',
          data: mostrarSuenio }])
        setData(res);
       });
   }, []);




  return (
  
    <section className="col-xs-12 col-lg-6 mb-3 suenio">
      <div className="card card-dashboard bg-purple-800 rounded border border-primary">
        <div className="card-body">
              <div className="col-sm-12 grafico">
                <Chart
                  options={chart}
                  series={datosChart}
                  type="bar"
                  width="480"
              />
              </div>
           <h5 className="card-title text-white mb-0">Horas de sueño</h5>
        </div>
      </div>
    </section>
  )
}

export default Suenio;