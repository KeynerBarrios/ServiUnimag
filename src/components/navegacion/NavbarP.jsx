import React, { useContext } from 'react'
import './NavbarP.css'
import Logo from '../../assets/img/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import Contexto from '../../context/Contexto'

function NavbarP() {
    const {deslogearse} = useContext(Contexto)
    const navegacion = useNavigate();
    const login = ()=>{
      navegacion('/estudiante', {relative:true})
      deslogearse();
    }
  
  return (
    <nav className="Navbar"> 
        <div className='Navbar-container'>
            <img className='Logo' src={Logo} alt="" />
            <a className='Navbar-name'>ServiUnimag</a>
            <div className='content'>
                <div className='direction'>
                    <NavLink className='Nav-link' to="inicio">Inicio</NavLink>
                    <NavLink className='Nav-link' to="monitor1">Monitor</NavLink>
                    <a className='codigo' href="">2019214046</a>
                    <a className='nombre' href="">Keyner David Barrios Mercado</a>               
                </div>            
            </div>
            <div className='up'>
                <img className='avatar' src={Logo} alt="" />
            </div> 
            <button onClick={login} className='nav-button'>Cerrar Sesión</button>
        </div>
    </nav>
  )
}

export default NavbarP