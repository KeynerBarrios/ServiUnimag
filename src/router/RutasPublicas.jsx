import React, { useContext } from 'react'
import Contexto from '../context/Contexto'
import { Navigate } from 'react-router-dom'

const RutasPublicas = ({children}) => {
    const {logeado} = useContext(Contexto)
  return (!logeado)
  ?children
  :<Navigate to="/inicio"/>
}

export default RutasPublicas