import React from 'react'
import './Card.css'
import Logo from '../../assets/img/logo.png'

function Card() {
  return (
    <div className="card">
        <div>
        <img src={Logo} alt="Avatar" />
        </div>
        <div className="container-card">
          <h4><b>Pepito Perez</b></h4>
          <p>Algoritmos y Programación</p>
          <input className='button' type="button" value="PERFIL" />
        </div>
      </div>
  )
}

export default Card