import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {

  //! Funcionalidad de clase activa
  const activeClass = (navInfo) => {
      return navInfo.isActive === true ? "active-nav" : "inactive-nav"
  }


  return (
    <div>
    
    {/* end={true} previene que, al haber rutas que empiezan igual, se seleccionen varias rutas para la funcionalidad 
    de ruta seleccionada. end={true} hace única la ruta de cabo a rabo. */}

    <NavLink to="/beers" end={true} className={activeClass} >All Beers</NavLink>
    <NavLink to="/random-beer" end={true} className={activeClass}>Random Beer</NavLink>
    <NavLink to="/new-beer" end={true} className={activeClass}>New Beer</NavLink>


    </div>
  )
}

export default Navbar