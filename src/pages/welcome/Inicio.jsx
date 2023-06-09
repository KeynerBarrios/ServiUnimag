import React from 'react'
import './Inicio.css'
import { useNavigate } from 'react-router-dom'

const Inicio = () => {
  

  const navega = useNavigate();
  const monitorp = () => {
    navega('/monitor')
  }

  return (
    <>
    
    <div className='container'>
        <section className='container-content'>
        <h1 className='container-content-titulo'>Bienvenido a Serviunimag</h1>
        <p className='container-content-parrafo'>Puedes acceder a las diferentes listas que te presentamos a continuacion</p>
        <div className='container-content-buttons'>
            <button onClick={monitorp} className='container-content-buttons-button'>Lista de monitores</button>
        </div>
        </section>
        
    </div>
    </>
    
  )
}

export default Inicio