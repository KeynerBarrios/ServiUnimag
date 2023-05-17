import React from 'react'
import Logo from '../../assets/img/logo.png'
import './MonitorPe.css'
import { useNavigate } from 'react-router-dom'

function MonitorPe() {
    const navegacion = useNavigate();
    const agregar = () =>{
        navegacion('/agregar')
    }

    const navega = useNavigate();
    const horario = () => {
        navega('/horario')
    }

  return (
    <>
    <h1 className='title'>Perfil de monitor</h1>
    <div className='perfil'>
        <table className='table-bordered'>
            <tbody>
                <tr>
                    <td className='tdimg' rowSpan={7}>
                        <div>
                            <img className='imagenPerfil' src={Logo} alt="" />
                        </div>
                    </td>
                    <td className='tdstyle' colSpan={3}>
                        <p className='paragraph'>Nombre:</p>
                        <p>Keyner David Barrios Mercado</p>
                    </td>
                    <td className='tdstyle' colSpan={2}>
                        <p className='paragraph'>Nombre:</p>
                        <p>Keyner David Barrios Mercado</p>
                    </td>
                </tr>
                <tr>
                    <td className='tdstyle' colSpan={3}>
                        <p className='paragraph'>Nombre:</p>
                        <p>Keyner David Barrios Mercado</p>
                    </td>
                    <td className='tdstyle' colSpan={2}>
                        <p className='paragraph'>Nombre:</p>
                        <p>Keyner David Barrios Mercado</p>
                    </td>
                </tr>
                <tr>
                    <td className='tdstyle' colSpan={3}>
                        <p className='paragraph'>Nombre:</p>
                        <p>Keyner David Barrios Mercado</p>
                    </td>
                    <td className='tdstyle' colSpan={2}>
                        <p className='paragraph'>Nombre:</p>
                        <p>Keyner David Barrios Mercado</p>
                    </td>
                </tr>
                <tr>
                    <td className='tdstyle separacion' colSpan={5}>
                        <p className='paragraph'>Asignatura:</p>
                        <p>Programacion</p>
                    </td>
                    
                </tr>
            </tbody>
        </table>
    </div>
    <div className='buttonsolicitud'>
        <button onClick={horario} className='solicitud'>Horario</button>
        <button onClick={agregar}  className='solicitud1'>Agendar</button>
    </div>
    </>
  )
}

export default MonitorPe