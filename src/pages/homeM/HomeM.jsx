import React from 'react'
import './HomeM.css'
import Logo from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';

function HomeM() {
    const navega = useNavigate();
    const lista = () => {
        navega('/listadoe')
    }
    const naveg = useNavigate();
    const cambiar = () => {
        naveg('/cambiar')
    }
    const nave = useNavigate();
    const registrar = () => {
        nave('/registrar')
    }

    
    

    
  return (
    <>
    <h1 className='title-Home-monitor'>perfil monitor</h1>
    <div className='container-home-monitor'>
        <table className='table-home-monitor'>
            <tbody className='tbosy-home-monitor'>
                <tr>
                    <td className='td-home-monitor-img' rowSpan={7}>
                        <div>
                            <img className='imagenPerfil-home' src={Logo} alt="" />
                        </div>
                    </td>
                    <td className='td-home-monitor' colSpan={3}>
                        <p className='paragraph-home'>Nombre:</p>
                        <p>Keyner David Barrios Mercado</p>
                    </td>
                    <td className='td-home-monitor' colSpan={2}>
                        <p className='paragraph-home'>Nombre:</p>
                        <p>Keyner David Barrios Mercado</p>
                    </td>
                </tr>
                <tr>
                    <td className='td-home-monitor' colSpan={3}>
                        <p className='paragraph-home'>Nombre:</p>
                        <p>Keyner David Barrios Mercado</p>
                    </td>
                    <td className='td-home-monitor' colSpan={2}>
                        <p className='paragraph-home'>Nombre:</p>
                        <p>Keyner David Barrios Mercado</p>
                    </td>
                </tr>
                <tr>
                    <td className='td-home-monitor' colSpan={3}>
                        <p className='paragraph-home'>Nombre:</p>
                        <p>Keyner David Barrios Mercado</p>
                    </td>
                    <td className='td-home-monitor' colSpan={2}>
                        <p className='paragraph-home'>Nombre:</p>
                        <p>Keyner David Barrios Mercado</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className='buttonsolicitud-home'>
        <button onClick={registrar} className='registro'>registrar horario</button>
        <button onClick={cambiar} className='registro'>cambiar horario</button>
        <button onClick={lista}  className='registro'>lista de estudiantes</button>
    </div>
    </>
  )
}

export default HomeM