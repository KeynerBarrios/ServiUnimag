import React, { useContext } from 'react'
import Contexto from '../context/Contexto'
import { Navigate } from 'react-router-dom'

const RutasPrivadas = ({children}) => {
    const {logeado} = useContext(Contexto)
  return (logeado)
  ?children
  :<Navigate to="/estudiante"/>
}

export default RutasPrivadas