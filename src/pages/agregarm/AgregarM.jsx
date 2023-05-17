import React from 'react'
import NavbarP from '../../components/navegacion/NavbarP'
import './AgregarM.css'

function AgregarM() {
  return (
    <>
    <h1 className='Agregar-monitor'>AGREGAR MONITOR</h1>
    <div className='container-Monitor'>
        <table className='table-Monitor'>
            <tbody className='tbody-Monitor'>
                <tr>
                    <td className='title-Monitor' colSpan={2} >LUGAR</td>
                    <td className='title-Monitor' colSpan={2} >HORA</td>
                    <td className='title-Monitor' colSpan={2} >DÍA</td>
                    <td className='title-Monitor' colSpan={2} >AGREGAR</td>
                </tr>
                <tr>
                    <td className='texto'colSpan={2}>MAR CARIBE, SALON 202 SUR</td>
                    <td className='texto'colSpan={2}>16:00</td>
                    <td className='texto'colSpan={2}><input className='input-style' type="text" value={"LUNES 24 DE ABRIL"} /></td>
                    <td className='texto'colSpan={2}><input className='button-Monitor' type="button" value={"AGREGAR"}/></td>
                </tr>
                <tr>
                    <td className='texto'colSpan={2} >CIENAGA GRANDE, SALON 101 NORTE</td>
                    <td className='texto' colSpan={2} >10:30</td>
                    <td  className='texto' colSpan={2} ><input className='input-style' type="text" value={"JUEVES 6 DE ABRIL"} /></td>
                    <td className='texto' colSpan={2}><input className='button-Monitor' type="button" value={"AGREGAR"}/></td>
                </tr> 
            </tbody>
        </table>
    </div>
    </>
  )
}

export default AgregarM