import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Estudiante from '../pages/login/Estudiante'
import Monitor1 from '../pages/login/Monitor1'
import RouterPages from './RouterPages'
import RutasPublicas from './RutasPublicas'
import RutasPrivadas from './RutasPrivadas'

function RouterLogind() {
  return (
    <>
    <Routes>
      <Route path='estudiante' element={
      <RutasPublicas>
        <Estudiante/>
      </RutasPublicas>}/>
      <Route path='monitor1' element={
      <RutasPublicas>
        <Monitor1/>
      </RutasPublicas>}/>
      <Route path='/*' element={<RutasPrivadas><RouterPages/></RutasPrivadas>}/>
    </Routes>
   
    </>
  )
}

export default RouterLogind