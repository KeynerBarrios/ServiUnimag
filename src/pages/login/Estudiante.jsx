import React, { useContext, useState } from 'react'
import './Estudiante.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navegacion/Navbar';
import Contexto from '../../context/Contexto';


function Estudiante() {

  const [value, setValue]= useState("");
  const [valuee, setValuee]= useState("");
  const {logearse} = useContext(Contexto)
  const navegacion = useNavigate();
  const ingresar = () =>{
    navegacion('/', {relative:true})
    logearse('STUDENT')
  }

  const handleChange = e =>{
    setValue(e.target.value)
  }

  const handleChangel = e =>{
    setValuee(e.target.value)
  }
  return (
    <>
    <Navbar/>
    <div>
      <main>
        <section className='login'>
          <h1>Bienvenido Estudiante</h1>
          <input onChange={handleChange} className='box' type="text" value={value} />
          <input onChange={handleChangel} className='box' type="password" value={valuee} />
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