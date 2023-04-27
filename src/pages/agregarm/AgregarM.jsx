import React from 'react'
import NavbarP from '../../components/navegacion/NavbarP'
import './AgregarM.css'

function AgregarM() {
  return (
    <>
    <NavbarP></NavbarP>
    <h1>AGREGAR MONITOR</h1>
    <div className='container-Monitor'>
        <table className='table-Monitor'>
            <tbody className='tbody-Monitor'>
                <tr>
                    <td className='title-Monitor'>LUGAR</td>
                    <td className='title-Monitor'>HORA</td>
                    <td className='title-Monitor'>DÍA</td>
                    <td className='title-Monitor'>AGREGAR</td>
                </tr>
                <tr>
                    <td className='texto'>MAR CARIBE, SALON 202 SUR</td>
                    <td className='texto'>16:00</td>
                    <td className='input-Monitor'><input type="text" value={"LUNES 24 DE ABRIL"} /></td>
                    <td><button className='button-Monitor'>AGREGAR</button></td>
                    
                </tr>
                <tr>
                <td className='texto'>CIENAGA GRANDE, SALON 101 NORTE</td>
                <td className='texto'>10:30</td>
                <td  className='input-Monitor'><input type="text" value={"JUEVES 6 DE ABRIL"} /></td>
                <td><button className='button-Monitor'>AGREGAR</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default AgregarM