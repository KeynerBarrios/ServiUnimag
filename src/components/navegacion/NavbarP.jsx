import React from 'react'
import './NavbarP.css'
import Logo from '../../assets/img/logo.png'

function NavbarP() {
  return (
    <nav className="Navbar"> 
        <div className='Navbar-container'>
            <img className='Logo' src={Logo} alt="" />
            <a className='Navbar-name'>ServiUnimag</a>
            <div className='content'>
                <div className='direction'>
                    <a className='Nav-link' href="">Inicio</a>
                    <a className='Nav-link' href="">Monitor</a>
                    <a className='Nav-link' href="">Estudiante</a>
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