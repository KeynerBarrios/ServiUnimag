import React, { useEffect, useState } from 'react'
import Logo from '../../assets/img/logo.png'
import './MonitorPe.css'
import {useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function MonitorPe() {

    const [data, setDatas] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        axios.get('http://localhost:4000/teacher/'+ id )
        .then(response => {
            const subjectsData = response.data.data;
            setDatas(subjectsData);
            console.log("console",subjectsData)
        }).catch(error => {
            console.error(error);
        });
    }, []);


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
                        <p>{data.fullName}</p>
                    </td>
                    <td className='tdstyle' colSpan={2}>
                        <p className='paragraph'>Carrera:</p>
                        <p>{data.career}</p>
                    </td>
                </tr>
                <tr>
                    <td className='tdstyle' colSpan={3}>
                        <p className='paragraph'>Código:</p>
                        <p>{data.code}</p>
                    </td>
                    <td className='tdstyle' colSpan={2}>
                        <p className='paragraph'>Semestre:</p>
                        <p>{data.semester}</p>
                    </td>
                </tr>
                <tr>
                    <td className='tdstyle' colSpan={3}>
                        <p className='paragraph'>Celular:</p>
                        <p>{data.phone}</p>
                    </td>
                    <td className='tdstyle' colSpan={2}>
                        <p className='paragraph'>Correo:</p>
                        <p>ejemplo@unimagadale.edu.co</p>
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