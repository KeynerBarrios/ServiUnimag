import React from 'react'
import './RegistroM.css'
import NavbarP from '../../components/navegacion/NavbarP'
function RegistroM() {
  return (
    <>
    <NavbarP></NavbarP>
    <h1 className='title-lista-Estudiante'>lista de estudiantes</h1>
    <div className='container-Lista'>
        <table className='table-Listado'>
            <tbody className='tbody-listado'>
                <tr>
                    <td colSpan={2} className='td-Listado-title'>horario</td>
                    <td colSpan={2} className='td-Listado-title'>estudiante</td>
                    <td colSpan={2} className='td-Listado-title'>código</td>
                </tr>
                <tr>
                    <td colSpan={2} className='td-Listado'>16:00</td>
                    <td colSpan={2} className='td-Listado'>YOLANDA EUGENIA LASSO FERNANDEZ</td>
                    <td colSpan={2} className='td-Listado'><input className='input-style-horario' type="text" value={"2019214046"} /></td>
                </tr>
                <tr>
                    <td colSpan={2} className='td-Listado'>10:30</td>
                    <td colSpan={2} className='td-Listado'>ANDRES PATRICIO LOPEZ FERRER</td>
                    <td colSpan={2} className='td-Listado'><input className='input-style-registro' type="text" value={"2019214046"} /></td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default RegistroM