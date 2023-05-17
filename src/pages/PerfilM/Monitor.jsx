import React from 'react'
import './monitor.css'
import Card from '../../components/navegacion/Card'

function Monitor() {
  const data = [
    {
      id: 1,  
      nombre: "pepito perez",
      materia: "Algoritmos y programación"
    },
    {
      id: 2,  
      nombre: "julio perez",
      materia: "Algoritmos y programación"
    },
    {
      id: 3,  
      nombre: "carlos perez",
      materia: "Algoritmos y programación"
    },
    {
      id: 4,  
      nombre: "jorge perez",
      materia: "Algoritmos y programación"
    },
    {
      id: 5,  
      nombre: "camilo perez",
      materia: "Base de datos"
    },
    {
      id: 6,  
      nombre: "esteban perez",
      materia: "Base de datos"
    },
    {
      id: 7,  
      nombre: "will perez",
      materia: "Base de datos"
    },
    {
      id: 8,  
      nombre: "luis perez",
      materia: "Base de datos"
    },
    {
      id: 9,  
      nombre: "lucas perez",
      materia: "Calculo vectorial"
    },
    {
      id: 10,  
      nombre: "ali perez",
      materia: "Calculo vectorial"
    },
    {
      id: 11,  
      nombre: "joel perez",
      materia: "Calculo vectorial"
    },
    {
      id: 12,  
      nombre: "raul perez",
      materia: "Calculo vectorial"
    },
    {
      id: 13,  
      nombre: "santiago perez",
      materia: "Calculo integral"
    },
    {
      id: 14,  
      nombre: "edgardo perez",
      materia: "Calculo integral"
    },
    {
      id: 15,  
      nombre: "mateo perez",
      materia: "Calculo integral"
    },
    {
      id: 16,  
      nombre: "david perez",
      materia: "Calculo integral"
    },
    {
      id: 17,  
      nombre: "andres perez",
      materia: "Programación web"
    },
    {
      id: 18,  
      nombre: "alvaro perez",
      materia: "Programación web"
    },
    {
      id: 19,  
      nombre: "uriel perez",
      materia: "Programación web"
    },
    {
      id: 20,  
      nombre: "tomas perez",
      materia: "Programación web"
    }
]
  return (
    <>
    <div className='nav'>
    </div>
    <div className='container-Buscador'>
      <div className='Busqueda'>
        <input className='buscardor' type="text" placeholder='Buscar' required />
        <button className='button-buscar'>Buscar</button>
      </div>
    </div> 

    <div className='card1'>
      <Card data={data}></Card>
    </div>
  </>
  )
}

export default Monitor