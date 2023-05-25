import React from 'react'
import './Card.css'
import Logo from '../../assets/img/logo.png'
import {Link, useNavigate } from 'react-router-dom'

function Card({monitor}) {
  
  
  return (
    <section className='content'>
      {monitor.map((datos) => {
        return(
          <div className="card" key={datos.id}>
            <div>
              <img src={Logo} alt="Avatar" />
            </div>
             <div className='container-card'>
              <h4 className='name'>{datos.teacher.fullName}</h4>
              <p>{datos.name}</p>
              <Link to={'/monitorpe/'+ datos.teacher.id} ><button  className='button-p'>perfil</button></Link>
             </div>
          </div>
        )})
      }
     </section>
   
  )
}
export default Card