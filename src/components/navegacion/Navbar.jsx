import React from 'react'
import './Navbar.css'
import Logo from '../../assets/img/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';


function Navbar() {
    const navegacion = useNavigate();
    const monitorr = () =>{
        navegacion('/monitor1')
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
            <div className="container-fluid">
                <img className='Logo-E' src={Logo} alt="" />
                <a className="navbar-brand" href="#">ServiUnimag</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="https://www.unimagdalena.edu.co/UnidadesOrganizativas/Dependencia/2002">Inicio</a>
                        <a onClick={monitorr} className="nav-link">Monitor</a>
                        {/* <NavLink onClick={monitorr}  className="nav-link"  to="estudiante">Monitor</NavLink> */}
                        <NavLink className="nav-link"  to="/">Estudiantes</NavLink>
                        <NavLink to="unimag"><a className="nav-link disabled" href='#'>Unimag</a></NavLink>
                        <a className="nav-link disabled" href='#'>Información</a>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar