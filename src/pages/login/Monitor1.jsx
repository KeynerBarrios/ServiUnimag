import React from 'react'
import './Monitor1.css'
import Navbar from '../../components/navegacion/Navbar'


function Monitor1() {
  return (
    <>
    
    <Navbar></Navbar>
    <div>
      <main>
        <section className='login'>
          <h1>Bienvenido Monitor</h1>
          <input className='box' type="text" value='Usuario' />
          <input className='box' type="password" value={12345678} />
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

export default Monitor1