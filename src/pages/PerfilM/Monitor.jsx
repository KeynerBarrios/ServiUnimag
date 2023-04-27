import React from 'react'
import './Monitor.css'
import NavbarP from '../../components/navegacion/NavbarP'
import Card from '../../components/navegacion/Card'

function Monitor() {
  return (
    <>
    <div className='nav'>
    <NavbarP></NavbarP>
    </div>

    <div className='container-Buscador'>
      <div className='Busqueda'>
        <input className='buscardor' type="text" placeholder='Buscar' required />
        <button className='button-buscar'>Buscar</button>
      </div>
    </div> 

    <div className='card1'>
      <Card></Card>
      <Card></Card>      
      <Card></Card>      
      <Card></Card>           
      <Card></Card>           
      <Card></Card>           
      <Card></Card>           
      <Card></Card>           
      <Card></Card>           
      <Card></Card>           
      <Card></Card>           
      <Card></Card>           
    </div>
  </>
  )
}

export default Monitor