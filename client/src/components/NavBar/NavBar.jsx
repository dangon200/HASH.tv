import { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './NavBarData';
import './NavBar.css';
import { IconContext } from 'react-icons';
import logo from '../../utils/logo.svg'
import SeachBar from '../searchBar/searchBar'


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
           <img src={logo} alt="logo"/>
           <div className='search'><SeachBar/></div>
           <Link to={'/stream'} className='botton_stream'>Stream</Link>
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