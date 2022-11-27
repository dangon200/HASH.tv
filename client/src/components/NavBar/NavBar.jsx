import { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './NavBarData';
import './NavBar.css';
import { IconContext } from 'react-icons';
import logo from '../../utils/logo.svg'
import SeachBar from '../searchBar/searchBar'
import SingIn from '../FormSingIn/FormSingIn';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaListUl onClick={showSidebar} />
          </Link>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className='search'><SeachBar /></div>
          <Link to="/createUser" >
            <button>SingUp</button>
          </Link>
          <SingIn />
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

export default Navbar;  