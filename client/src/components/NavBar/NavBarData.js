import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from "react-icons/si";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Explorar',
    path: '/explorar',
    icon: <SiIcons.SiAzuredataexplorer />,
    cName: 'nav-text'
  },
  {
    title: 'Suscripciones',
    path: '/user/suscripciones',
    icon: <FaIcons.FaCrown />,
    cName: 'nav-text'
  },
  {
    title: 'Favoritos',
    path: '/user/favoritos',
    icon: <FaIcons.FaStar />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/aboutus',
    icon: <SiIcons.SiMicrosoftteams />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];