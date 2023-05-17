import React from 'react'
import './NavbarP.css'
import Logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'

function NavbarP() {
  return (
    <nav className="Navbar"> 
        <div className='Navbar-container'>
            <img className='Logo' src={Logo} alt="" />
            <a className='Navbar-name'>ServiUnimag</a>
            <div className='content'>
                <div className='direction'>
                    <NavLink className='Nav-link' to="inicio">Inicio</NavLink>
                    <NavLink className='Nav-link' to="monitor">Monitor</NavLink>
                    <a className='codigo' href="">2019214046</a>
                    <a className='nombre' href="">Keyner David Barrios Mercado</a>               
                </div>            
            </div>
            <div className='up'>
                <img className='avatar' src={Logo} alt="" />
            </div> 
        </div>
    </nav>
  )
}

export default NavbarP