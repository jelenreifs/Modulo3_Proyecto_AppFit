import Chart from "react-apexcharts";
import React, { useState, useEffect } from 'react';

function Pasos() {

 let series = [{
    name: 'Sueño',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
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
    fetch("http://localhost:3000/pasos")
     .then(res => res.json())
       .then(res => {
        setData(res);
       });
 }, []);

  

  return (
    <section className="col-xs-12 col-lg-4 pasos">
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
           <h5 className="card-title text-white mb-0">Pasos</h5>
        </div>
      </div>
    </section>
  )
}

export default Pasos;