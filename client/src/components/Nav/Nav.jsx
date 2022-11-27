import style from './nav.module.css'
import { Link } from 'react-router-dom'
import Navegador from '../Navegador/Navegador.jsx'
import logo from '../../utils/logo.svg'
import { useSelector } from 'react-redux'
import FormLogin from '../FormLogin/FormLogin'
import Modale from '../Modale/Modale'
import { MdNotifications } from 'react-icons/md'
import { BsFillChatFill } from 'react-icons/bs'
import { RiAdminFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
// import { useEffect } from 'react'
// import SeachBar from '../SearchBar/SearchBar'

// import { showModal } from '../../store/actions/actions'
import { io } from 'socket.io-client'
import { useEffect, useRef, useState } from 'react'

export default function Nav () {
  const user = useSelector(state => state.user)
  const notifications = useSelector(state => state.notifications)
  const socket = useRef()
  const [show, setShow] = useState(false)
  useEffect(() => {
    /* socket.current = io('https://websocketpf.herokuapp.com/') */
    socket.current = io('http://localhost:8900')
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg ${style.navbar}`}>
      <div className='container-fluid'>

        <div className={style.logoContainer}>

          <Link to='/home' className={`me-auto ${style.span}`}>
            <img src={logo} alt='logo' className={`navbar-brand ${style.logo}`} />
            {/* <span className={style.span}>E-WINE</span> */}
          </Link>
          {user
            ? <Link to='/userProfile' className={style.userDataContainer}>
              <img className={style.userImage} src={user.image ? user.image : 'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png'} alt='user' />
              <span className={style.username}>{user.username}</span>
          </Link> //eslint-disable-line
            : null}
          {user
            ? <div className={style.notificationsContainer} onClick={() => notifications.length && setShow(!show)}>
              <MdNotifications className={style.notificationIcon} />
              <div className={style.numberNotifications}>{notifications.length}</div>
            </div> //eslint-disable-line
            : null}
          {user
            ? <Link to='/messenger' className={style.messenger}>
              <BsFillChatFill />
            </Link> //eslint-disable-line
            : null}
          {user.isAdmin
            ? <Link to='/admin' className={style.admin}>
              <RiAdminFill />
            </Link> //eslint-disable-line
            : null}
        </div>

        {/* <div>
          <SeachBar />
        </div> */}

        <button className={`navbar-toggler ${style.toggler}`} type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className={style.menu}><GiHamburgerMenu /></span>
          {/* <span className='navbar-toggler-icon' /> */}
        </button>

        <div className={`collapse navbar-collapse  ${style.links}`} id='navbarNavAltMarkup'>

          <div className='navbar-nav ms-auto me-2 mb-2 mb-lg-0'>
            <Navegador link='/' span='Inicio' className='nav-link' />

            <Navegador link='/about' span='Sobre E-Wine' className='nav-link' />

            <Navegador link='/home' span='Tienda' className='nav-link' />

            {/* {user
              ? <Link to='/messenger' className={style.messenger}>
                <BsFillChatFill />
            </Link> //eslint-disable-line
              : null} */}
            {/* <FormLogin /> */}
            {user &&
              <Navegador link='/createPublication' span='Crear Publicación' className='nav-link' />}
            <Modale
              buttonText={!user ? 'Iniciar sesión' : 'Cerrar sesión'}
              title={!user ? 'Iniciar sesión' : 'Cerrar sesión'}
              render={FormLogin}
              link='/register'
              createAcc
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
