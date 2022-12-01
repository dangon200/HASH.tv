import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './NavBarData';
import Style  from './NavBar.css';
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

          <div className={`d-flex justify-content-end h-75 d-inline-block`}>

            {user &&
            <Link className='botton_stream' to="/stream">
            <button className='botton_stream' >Stream</button>
            </Link>
               }
            {user &&
              <Link className='botton_stream' to={`/user/${user._id}`}>
              <button className='botton_stream' >User</button>
            </Link>}
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

