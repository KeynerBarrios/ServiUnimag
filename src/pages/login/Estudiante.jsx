import React, { useContext } from 'react'
import './Estudiante.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navegacion/Navbar';
import Contexto from '../../context/Contexto';


function Estudiante() {
  const {logearme} = useContext(Contexto)
  const navegacion = useNavigate();
  const ingresar = () =>{
    navegacion('/', {relative:true})
    logearme('jab')
  }
  return (
    <>
    <Navbar/>
    <div>
      <main>
        <section className='login'>
          <h1>Bienvenido Estudiante</h1>
          <input className='box' type="text" value='Usuario' />
          <input className='box' type="password" value={1234567} />
          <button onClick={ingresar}>Ingresar</button><br />
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