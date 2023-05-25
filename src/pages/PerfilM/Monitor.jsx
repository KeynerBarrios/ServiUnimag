import React, { useEffect, useState } from 'react'
import './monitor.css'
import Card from '../../components/navegacion/Card'
import axios from 'axios';

function Monitor() {

  const [busqueda, setBusqueda] = useState("");
  const [monitor, setMonitor] = useState([]);
  const [cards, setCards] = useState([]);

  const peticionGet = async () => {
    await axios.get('http://localhost:4000/subjects')
    .then(response => {
      setCards(response.data.data);
      setMonitor(response.data.data);
      console.log(setMonitor)
    }).catch(error => {
      console.log(error);
    })
  }

  const handleChange = e =>{
    setBusqueda(e.target.value)
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadoBusqueda = cards.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento; 
      }
    })
    setMonitor(resultadoBusqueda);
  }

  useEffect(()=>{
    peticionGet();
  }, [])

 
  return (
    <>
    
    <div className='nav'>
    </div>
    <div className='container-Buscador'>
      <div className='Busqueda'>
        <input onChange={handleChange} value={busqueda} className='buscardor' type="text" placeholder='Buscar por materia' required />
        <button   className='button-buscar'>Buscar</button>
      </div>
    </div> 

    <div className='card1'>
      <Card monitor={monitor}></Card>
    </div>
  </>
  )
}

export default Monitor