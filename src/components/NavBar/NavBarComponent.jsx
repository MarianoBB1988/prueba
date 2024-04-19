import React from 'react'
//import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidgetComponent'

import Href from './HrefComponent';

export default function NavBarComponent({cantArticulos}) {

  const imgEstilo = {
    width:'110px',
    height:'50px',
    
    margin: '10px'
  }
  
//const [cont, setCont] = useState(0);

/*const devolverCantidad = () => {
  setCont(cont+valor);
  
};*/



  return (
    <>

    <header className="fixed-top ">
      
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img style={imgEstilo} src='../../src/assets/logo.png' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Href menu='Inicio' texto='Home'/>
        </li>
        <li className="nav-item">
          <Href menu='Ropa y Clazado' texto='Ropa, calzado y accesorios'/>
        </li>
        <li className="nav-item">
           <Href menu='Libros, Revistas y Comics' texto='Libros, Revistas y Comics'/>
        </li>
        <li className="nav-item">
           <Href menu='Joyas y Relojes' texto='Joyas y Relojes'/>
        </li>
        <li className="nav-item">
           <Href menu='Instrumentos Musicales' texto='Instrumentos Musicales'/>
        </li>
    
        <li className="nav-item">
           <Href menu='Acerca de nosotros...' texto='Información sobre la página y sus creadores, redes sociales, etc.'/>
        </li>
       
      </ul>

       <CartWidget/>
       <strong> <p className='text-white '> {cantArticulos}</p></strong>
    </div>
  </div>

</nav>
    </header>


  

     

    </>
  
  )
}
