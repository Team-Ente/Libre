import React from 'react'
import * as FaIcons from 'react-icons/fa'; //for fontawesome icons
import * as AiIcons from 'react-icons/ai'; //for aiICons icons
import * as BsIcons from 'react-icons/bs'; //for BsIcons icons
import * as IoIcons from 'react-icons/io';
import * as IcoIcons from 'react-icons/im';
import './Sidenav.css';

function Sidenav() {
  return (
    <div className='header'>
    <div className='side-nav'>
        <ul className='nav-links'>
            <li><a href='#'><i><AiIcons.AiFillHome /></i><p>Home</p></a></li>
            <li><a href='#'><i><AiIcons.AiFillCompass /></i><p>Discover</p></a></li>
            <li><a href='#'><i><AiIcons.AiFillEye /></i><p>Reading</p></a></li>
            <li><a href='#'><i><BsIcons.BsFillBookmarkFill /></i><p>Wishlist</p></a></li>
            <li><a href='#'><i><AiIcons.AiFillCheckCircle /></i><p>Completed</p></a></li>
            <div className='active'></div>
        </ul>
    </div>
    </div>
  )
}

export default Sidenav