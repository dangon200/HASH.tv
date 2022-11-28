import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './NavBarData';
import './NavBar.css';
import { IconContext } from 'react-icons';
import logo from '../../utils/logo.svg'
import SeachBar from '../searchBar/searchBar'
import FormLogin from '../FormLogin/FormLogin'
import Modale from '../Modale/Modale'
// import Navegador from '../Navegador/Navegador.jsx'

export default function Navbar() {
  const user = useSelector(state => state.user)
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  console.log(user)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaListUl onClick={showSidebar} />
          </Link>
          <img src={logo} alt="logo"/>
          <div className='search'><SeachBar/></div>

          <div className='navbar-nav ms-auto me-2 mb-2 mb-lg-0'>

            {user &&
               <Link to={'/stream'} className='botton_stream'>Stream</Link>}
            {user &&
               <Link to={`/user/${user._id}`} className='botton_stream'>User</Link>}
            {/* {user &&
              <Navegador link='/HashCash' span='Comprar HashCash' className='nav-link' />}
            {user &&
              <Navegador link='/profile' span='Perfil' className='nav-link' />} */}
            <Modale
              buttonText={!user ? 'Iniciar sesión' : 'Cerrar sesión'}
              title={!user ? 'Iniciar sesión' : 'Cerrar sesión'}
              render={FormLogin}
              link='/register'
              createAcc
            />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
            </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

