import React from 'react'
import './RegistrarHM.css'
import NavbarP from '../../components/navegacion/NavbarP'

function RegistrarHM() {
  return (
    <>
    <NavbarP></NavbarP>
    <h1 className='titl-rhm'>regitrar horario</h1>
    <div className='container-rhm'>
        <div className='content-rhm'>
            <input className='input-rhm' type="date" />
            <input className='input-rhm' type="time" />
            <input className='input-rhm' placeholder='MAR CARIBE' type="text" />
            <input className='input-rhm' placeholder='203 SUR' type="text" />
        </div>
    </div>
    <div className='content-button-rhm'>
        <button className='button-cancelar button-rhm'>cancelar</button>
        <button className='button-agregar  button-rhm'>agregar</button>
    </div>
    
    </>
  )
}

export default RegistrarHM