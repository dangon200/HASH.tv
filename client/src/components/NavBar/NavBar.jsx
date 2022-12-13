import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import './NavBar.css';

import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const user = useSelector(state => state.user)
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  console.log(user)

  return (
    <div className='navbar'>
      <div className='navbar-ul'>
        <ul>
          <Link to='/' className='ul-link'>
            <li><p>Inicio</p></li>
          </Link>

          <Link to='/explorar' className='ul-link'>
            <div></div>
            <li><p>Explorar</p></li>
            <div></div>
          </Link>

          <Link to='/aboutus' className='ul-link'>
            <li><p>Equipo</p></li>
          </Link>

          <Link to='/support' className='ul-link'>
            <li><p>Soporte</p></li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

