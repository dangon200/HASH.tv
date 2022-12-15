import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData, SidebarData2 } from './NavBarData';
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
  const [sidebar2, setSidebar2] = useState(false);
  const showSidebar2 = () => setSidebar2(!sidebar2);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      
        <div className='navbar'>
        <div className="align-items-center justify-content-start h-120">
          <Link to='#' className='menu-bars'>
            <FaIcons.FaListUl onClick={showSidebar} />
          </Link>
          <img className='img2' src={logo} alt="logo"/>
          </div>
          <div className='search'><SeachBar/></div>
          <div className={`align-items-center justify-content-end h-100`}>

            
            {user &&
              <Link to='#' className='menu-bars2'>
              <FaIcons.FaUserAstronaut onClick={showSidebar2} />
            </Link>}
            {/* {user &&
              <Navegador link='/HashCash' span='Comprar HashCash' className='nav-link' />}
            {user &&
              <Navegador link='/profile' span='Perfil' className='nav-link' />} */}
            {!user && 
              <Modale
              buttonText={!user ? 'Iniciar sesión' : 'Cerrar sesión'}
              title={!user ? 'Iniciar sesión' : 'Cerrar sesión'}
              render={FormLogin}
              link='/register'
              createAcc
            />}
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

        <nav className={sidebar2 ? 'nav-menu2 active' : 'nav-menu2'}>
          <ul className='nav-menu-items2' onClick={showSidebar2}>
            <li className='navbar-toggle2'>
              <Link to='#' className='menu-bars2'>
                <AiIcons.AiOutlineClose />
            </Link>
            </li>
            {SidebarData2.map((item, index) => {
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

