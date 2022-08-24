import React from "react";
import * as FaIcons from 'react-icons/fa'; //for fontawesome icons
import * as AiIcons from 'react-icons/ai'; //for aiICons icons

export const sidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <FaIcons.FaPaperclip />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <AiIcons.AiOutlineTeam />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <FaIcons.FaHandsHelping />,
        cName: 'nav-text'
    },
]