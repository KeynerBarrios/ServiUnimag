import React, { useContext, useEffect, useState } from 'react'
import './Monitor1.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navegacion/Navbar';
import Contexto from '../../context/Contexto';
import axios from 'axios';


function Monitor1() {
  const [data, setDatas] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:4000/subjects/' )
        .then(response => {
            const subjectsData = response.data.data;
            setDatas(subjectsData);
            console.log("console",subjectsData)
        }).catch(error => {
            console.error(error);
        });
    }, []);

  const {logearse} = useContext(Contexto)
  const navegacion = useNavigate();
  const ingresar = ()=>{
    navegacion('/', {relative:true})
    logearse('MONITOR')
  }
  return (
    <>
    <Navbar/>
    <div>
      <main>
        <section className='login'>
          <h1>Bienvenido Monitor</h1>
          <input className='box' type="text" value='Usuario' />
          <input className='box' type="password" value={12345678} />
          <button onClick={ingresar}>Ingresar</button><br />
          <label><input className='checkbox' type="checkbox" />Recordar Contraseña</label>
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