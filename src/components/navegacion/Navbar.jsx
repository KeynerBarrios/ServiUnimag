import React from 'react'
import './Navbar.css'
import Logo from '../../assets/img/logo.png'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
            <div className="container-fluid">
            <img className='Logo' src={Logo} alt="" />
                <a className="navbar-brand" href="#">ServiUnimag</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a className="nav-link" href="#">Monitor</a>
                        <a className="nav-link" href="#">Estudiantes</a>
                        <a className="nav-link disabled" href='#'>Unimag</a>
                        <a className="nav-link disabled" href='#'>Información</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar