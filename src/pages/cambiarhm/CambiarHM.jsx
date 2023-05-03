import React from 'react'
import './CambiarHM.css'
import NavbarP from '../../components/navegacion/NavbarP'

function CambiarHM() {
  return (
    <>
    <NavbarP></NavbarP>
    <h1 className='titl-chm'>cambiar horario</h1>
    <div className='container-chm'>
        <div className='content-chm'>
            <input className='input-chm' type="date" />
            <input className='input-chm' type="time" />
            <input className='input-chm' placeholder='MAR CARIBE' type="text" />
            <input className='input-chm' placeholder='203 SUR' type="text" />
        </div>
    </div>
    <div className='content-button-chm'>
        <button className='button-can button-chm'>cancelar</button>
        <button className='button-agre  button-chm'>cambiar</button>
    </div>
    </>
  )
}

export default CambiarHM