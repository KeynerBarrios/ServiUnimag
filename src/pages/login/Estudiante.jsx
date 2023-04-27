import React from 'react'
import './Estudiante.css'
import Navbar from '../../components/navegacion/Navbar'


function Estudiante() {
  return (
    <>
    
    <Navbar></Navbar>
    <div>
      <main>
        <section className='login'>
          <h1>Bienvenido Estudiante</h1>
          <input className='box' type="text" value='Usuario' />
          <input className='box' type="password" value={1234567} />
          <button>Ingresar</button><br />
          <label><input className='checkbox' type="checkbox" /> Recordar Contraseña</label>
        </section>

        <section className='imagen'>
          <div className='imag'></div>
        </section>
      </main>
    </div>
    </>
  )
}

export default Estudiante