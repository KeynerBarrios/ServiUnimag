import React, {useReducer } from 'react'
import Contexto from './Contexto'
import miReducer from './miReducer'
import types from './types'

const init = () =>{
    const valor = localStorage.getItem("estado","role")
    return{
        estado:!!valor
    }
}

const Provider = ({children}) => {   
    const [logeado,dispatch] = useReducer(miReducer,{},init)    
const logearme = () =>{
    const action = {
        type:types.login
    }
    localStorage.setItem("estado", true)
    localStorage.setItem("role", true)
    dispatch(action)
}
const deslogearme = () =>{
    const action = {
        type:types.logout
    }
    localStorage.removeItem("estado")
    localStorage.removeItem("role")
    dispatch(action)
}

  return (
    <Contexto.Provider value={{
        ...logeado,
        logearme,
        deslogearme
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider