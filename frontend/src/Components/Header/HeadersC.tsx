import React from 'react'
import { Link } from "react-router-dom";

export const HeadersC = () => {
  return (
    <>
       <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/procesadores">Procesadores</Link></li>
            <li><Link className="dropdown-item" to="/cases">Cases</Link></li>
            <li><Link className="dropdown-item" to="/motherboards">Motherboards</Link></li>
            <li><Link className="dropdown-item" to="/cardg">Tarjetas Graficas</Link></li>
            <li><Link className="dropdown-item" to="/fuentesP">Fuentes de poder</Link></li>
            <li><Link className="dropdown-item" to="/ssd">Unidad de estado solido SSD</Link></li>
            <li><Link className="dropdown-item" to="/ram">Memorias RAM</Link></li>
        </ul>
    </>
  )
}
