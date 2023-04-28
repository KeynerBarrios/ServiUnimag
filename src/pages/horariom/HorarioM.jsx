import React from 'react'
import './HorarioM.css'
import NavbarP from '../../components/navegacion/NavbarP'

function HorarioM() {
  return (
    <>
    <NavbarP></NavbarP>
    <h1 className='title-Horario'>Horario Monitor</h1>
    <div className='container-horario'>
        <table className='table-horario'>
            <tbody className='tbody-horario'>
                <tr>
                    <td colSpan={2} className='td-horario-title'>lugar</td>
                    <td colSpan={2}  className='td-horario-title'>hora</td>
                    <td colSpan={2}  className='td-horario-title'>día</td>
                </tr>
                <tr>
                    <td colSpan={2}  className='td-horario'>MAR CARIBE, SALON 202 SUR</td>
                    <td colSpan={2}  className='td-horario'>16:00</td>
                    <td colSpan={2}  className='td-horario'><input className='input-style-horario' type="text" value={"LUNES 24 DE ABRIL"} /></td>
                </tr>
                <tr>
                    <td colSpan={2}  className='td-horario'>CIENAGA GRANDE, SALON 101 NORTE</td>
                    <td colSpan={2}  className='td-horario'>10:30</td>
                    <td colSpan={2}  className='td-horario'><input className='input-style-horario' type="text" value={"LUNES 24 DE ABRIL"} /></td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default HorarioM