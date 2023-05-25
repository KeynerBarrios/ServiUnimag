import React, {useReducer } from 'react'
import Contexto from './Contexto'
import miReducer from './miReducer'
import types from './types'

const init = () => {
    const user = localStorage.getItem("valor")
    return {
        logeado: !!user,
        usuario: user
    }
}

const Provider = ({children}) => {   
    
    const [autenficacion, dispatch] = useReducer(miReducer,{},init)
    
    const logearse = (user='')=>{
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem("valor", user)
        localStorage.setItem("role", user)
        dispatch(action)
    }

    const deslogearse = () =>{
        const action = {
            type: types.logout,
            payload: null
        }
        localStorage.removeItem("valor")
        dispatch(action)
    }


  return (
    <Contexto.Provider value={{
        ...autenficacion,
        logearse,
        deslogearse
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider