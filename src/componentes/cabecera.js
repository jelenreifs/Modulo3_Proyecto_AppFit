function Cabecera(props) {
  console.log(props.cambiarClase)

  return (
    <header className="row">
       <nav className="navbar">
        <button className="btn btn-primary" id="menu-toggle" onClick={props.cambiarClase} > MENU </button>
      
          <ul className="ml-auto mt-2 mt-lg-0">
            <li className="nav-item active text-white">
              <span className="nav-link">Enlace 1<span className="sr-only">(current)</span></span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Enlace 2</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
               Entrenamientos
              </span>
            
            </li>
          </ul>
       
      </nav>
      </header>
            
            
)
  
  
}

export default Cabecera;