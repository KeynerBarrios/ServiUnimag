import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Monitor from '../pages/PerfilM/Monitor'
import NavbarP from '../components/navegacion/NavbarP'
import MonitorPe from '../pages/monitoP/MonitorPe'
import AgregarM from '../pages/agregarm/AgregarM'
import HorarioM from '../pages/horariom/HorarioM'
import RegistroM from '../pages/registrom/RegistroM'
import {HandlerRole} from '../middlewares/HandlerRole'
import CambiarHM from '../pages/cambiarhm/CambiarHM'
import RegistrarHM from '../pages/registrarhm/RegistrarHM'
function Routerpages() {
  return (
    <>
    
    <NavbarP/> 
    <Routes>
      <Route path='inicio' element={<HandlerRole currentRoute='inicio'/>}/>
      <Route path='monitor' element={<Monitor/>}/>
      <Route path='monitorpe/:id' element={<MonitorPe/>}/>
      <Route path='agregar' element={<AgregarM/>}/>
      <Route path='horario' element={<HorarioM/>}/>
      <Route path='listadoe' element={<RegistroM/>}/>
      <Route path='cambiar' element={<CambiarHM/>}/>
      <Route path='registrar' element={<RegistrarHM/>}/>
      <Route path='/' element={<Navigate to={"inicio"}/>}/>
    </Routes>
    </>
  )
}

export default Routerpages