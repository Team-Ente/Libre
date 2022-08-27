import React from "react";
import * as FaIcons from 'react-icons/fa'; //for fontawesome icons
import * as AiIcons from 'react-icons/ai'; //for aiICons icons
import * as BsIcons from 'react-icons/bs'; //for BsIcons icons
import * as IoIcons from 'react-icons/io';
export const sidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Discover',
        path: '/discover',
        icon: <FaIcons.FaRegCompass />,
        cName: 'nav-text'
    },
    {
        title: 'Reading',
        path: '/reading',
        icon: <AiIcons.AiOutlineEye />,
        cName: 'nav-text'
    },
    {
        title: 'Wishlist',
        path: '/wishlist',
        icon: <BsIcons.BsBookmark />,
        cName: 'nav-text'
    },
    {
        title: 'Completed',
        path: '/completed',
        icon: <IoIcons.IoMdCheckmarkCircleOutline />,
        cName: 'nav-text'
    },
]