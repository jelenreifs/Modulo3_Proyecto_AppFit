
import React, { useState, useEffect } from 'react';

function Seguimiento() {
const [data, setData] = useState([]);
   
  useEffect(() => {
    fetch("http://localhost:3000/entrenamientos")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  const mostrarDatos = data.map((item,index) => { 
    return (
      <>
        <tr key={ index }>
        <td className="tiempo">
            <i className="fas fa-clock"></i>
            <p className="list-item-dato">{item.duracion}</p>
            <p>Minutos</p>
        </td>
        <td className="kilometros">
            <i className="fas fa-tachometer-alt"></i>
            <p className="list-item-dato">{item.calorias}</p>
            <p>Calorias</p>
        </td>
        <td className="pasos">
            <i className="fas fa-shoe-prints"></i>
            <p className="list-item-dato">{item.pasos}</p>
              <p>Pasos</p>
        </td>
      </tr>
      </>
    )

  })


    return (
      <section className="container-fuid bg-purple-900 seguimiento">
          <table class="table">
          <tbody>
            { mostrarDatos}
            </tbody>
          </table>        
      
    </section>
  )
}

export default Seguimiento;