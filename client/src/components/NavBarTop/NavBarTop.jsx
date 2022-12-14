import React from 'react'
import './NavBarTop.css'
import Modale from '../Modale/Modale'
import FormLogin from '../FormLogin/FormLogin'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



export default function NavBarTop() {

  const user = useSelector(state => state.user)


  return (
    <div className='navbarTop'>
      <Modale
        buttonText={!user ? 'Iniciar sesión' : 'Cerrar sesión'}
        title={!user ? 'Iniciar sesión' : 'Cerrar sesión'}
        render={FormLogin}
        link='/register'
        createAcc
      />

      {/* Logica para cuando el usuario no inicio sesion*/}
      
        
        <Link 
          to='/register' 
          className={!user? 'navbarTop_register' : 'navbarTop_register--none'}
        >
            Registrarse
        </Link>
        

      

    </div>
  )
}
