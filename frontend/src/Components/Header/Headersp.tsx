import React from 'react'
import { Link } from "react-router-dom";
export const Headersp = () => {
  return (
    <>
     <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/mouse">Mouse</Link></li>
        <li><Link className="dropdown-item" to="/teclado">Teclado</Link></li>
        <li><Link className="dropdown-item" to="/audifonos">Audifonos</Link></li>
        <li><Link className="dropdown-item" to="/camara">Camara</Link></li>
        <li><Link className="dropdown-item" to="/microfono">Microfono</Link></li>
        <li><Link className="dropdown-item" to="/mousepad">Mousepad</Link></li>
    </ul>
    </>
  )
}
