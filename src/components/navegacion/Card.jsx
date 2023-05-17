import React from 'react'
import './Card.css'
import Logo from '../../assets/img/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

function Card({data}) {
  const listado = data
  const navegacion = useNavigate();
  const perfil = () =>{
    navegacion('/monitorpe')
  }
  return (
    
    <section className='content'>
      {listado.map((dato) => {
        return(
          <div className="card" key={dato.id}>
            <div>
              <img src={Logo} alt="Avatar" />
            </div>
             <div className='container-card'>
              <h4 className='name'>{dato.nombre}</h4>
              <p>{dato.materia}</p>
              <button className='button-p'onClick={perfil} >perfil</button>
             </div>
            
          </div>
        )})
      }
     </section>
   
  )
}

export default Card