
import { Link } from 'react-router-dom';
function Cabecera2(props) {
  console.log(props.cambiarClase)

  return (
    <header className="row">
      <nav className="navbar d-flex justify-content-between">
        <div>
          <button className="" id="menu-toggle" onClick={props.cambiarClase}>
            <i className="fas fa-bars"></i>
          </button>
            <img className="logo" src="images/logo_bootFit_small.png" alt="logo_appFit" />
        </div>
      
          <ul className="ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <i className="fas fa-arrow-left"></i>
               DASHBOARD
              </Link>
            </li>
        </ul>
      </nav>
      </header>
            
            
)
  
  
}

export default Cabecera2;