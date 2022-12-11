import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Explore',
    path: '/explorar',
    icon: <SiIcons.SiAzuredataexplorer />,
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
export const SidebarData2 = [
  {
    title: 'My Profile',
    path: '/user',
    icon: <FaIcons.FaUserAstronaut />,
    cName: 'nav-text2'
  },
  {
    title: 'My Channels',
    path: '/user/stream',
    icon: <MdIcons.MdOutlineVideoSettings />,
    cName: 'nav-text2'
  },
  {
    title: 'Subscriptions',
    path: '/user/subscriptions',
    icon: <MdIcons.MdFavorite />,
    cName: 'nav-text2'
  },
  {
    title: 'Favorites',
    path: '/user/favorites',
    icon: <FaIcons.FaStar />,
    cName: 'nav-text2'
  },
  {
    title: 'Log Out',
    path: '/logout',
    icon: <BsIcons.BsDoorClosedFill />,
    cName: 'nav-text2'
  },
];