import React from 'react'
import Modale from '../Modale/Modale'
import FormLogin from '../FormLogin/FormLogin'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './NavBarTop.css'



export default function NavBarTop() {

  const user = useSelector(state => state.user);

  return (
    <div className='navbarTop'>

      <div className={user ? 'navbarTop_register--none' : 'link-menu' }>
        <Modale
          buttonText={!user ? 'Iniciar sesión' : 'Cerrar sesión'}
          render={FormLogin}
          link='/register'
          createAcc
        />
      </div>

      {/* Logica inicio de sesion*/}
        
      <Link 
        to='/register' 
        className={!user? 'navbarTop_register' : 'navbarTop_register--none'}
      >
        Registrarse
      </Link>

      {/* <div 
        className={user? 'navbarTop_name' : 'navbarTop_register--none'}
      >
        <Link to='/user'>
          <p>{user.name}</p>
        </Link>
      </div> */}

      <div className='dropdown'>
        <div 
          className={user? `dropdown-toggle px-5 py-2 navbarTop_name`: 'navbarTop_register--none'}
          href='#' 
          role='button' 
          data-bs-toggle='dropdown' 
          aria-expanded='false'  
        >
          {user.name}
        </div>
        <ul className='dropdown-menu link-menu-container'>
          <Link 
            className='link-menu'
            to='/user'
          >
            <li className='link-menu'>Configuracion</li>
          </Link>

            <li 
              className='link-menu'
            >
              <Modale
                buttonText={!user ? 'Iniciar sesión' : 'Cerrar sesión'}
                render={FormLogin}
                link='/register'
                createAcc
              />
            </li>
        </ul>
      </div>
        
    </div>
  )
}
