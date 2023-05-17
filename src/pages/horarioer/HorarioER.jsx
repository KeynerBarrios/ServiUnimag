import React from 'react'
import './HorarioER.css'
import NavbarP from '../../components/navegacion/NavbarP'

function HorarioER() {
  return (
    <>
    <h1 className='title-her'>horario estudiantes registrados</h1>
    <div className='container-her'>
        <table className='table-her'>
            <tbody className='tbody-her'>
                <tr>
                    <td className='td-title-her' colSpan={2}>horario</td>
                    <td className='td-title-her' colSpan={2}>estudiante</td>
                    <td className='td-title-her' colSpan={2}>código</td>
                </tr>
                <tr>
                    <td className='td-her-he' colSpan={2}>16:00</td>
                    <td className='td-her-he' colSpan={2}>andres patricio lopez ferrer</td>
                    <td className='td-her-he' colSpan={2}><input className='input-style-hre' type="text" value={"2019214046"} /></td>
                </tr>
                <tr>
                    <td className='td-her-he' colSpan={2}>10:30</td>
                    <td className='td-her-he' colSpan={2}>yolanda eugenia lasso fernandez</td>
                    <td className='td-her-he' colSpan={2}><input className='input-style-hre' type="text" value={"2019214046"} /></td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default HorarioER