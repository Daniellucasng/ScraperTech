import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import logoQS from '../../assets/images/logoQuick.png'
import { Headersp } from './Headersp'
import { HeadersC } from './HeadersC'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <>
        <header>
        <nav className="navbar navbar-expand-lg bg-navy text-white">
            <div className="container-fluid">
               <Link to="/"> <img src={logoQS} id="image1"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Periféricos</a>
                           <Headersp/>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Componentes</a>
                            <HeadersC/>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/laptops">Laptops</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/monitores">Monitores</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}
