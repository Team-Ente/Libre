import React from 'react'
import * as FaIcons from 'react-icons/fa'; //for fontawesome icons
import * as AiIcons from 'react-icons/ai'; //for aiICons icons
import * as BsIcons from 'react-icons/bs'; //for BsIcons icons
import * as IoIcons from 'react-icons/io';
import * as IcoIcons from 'react-icons/im';
import { Link } from 'react-router-dom';
import './Sidenav.css';

function Sidenav() {
  return (
    <div className='header'>
    <div className='side-nav'>
        <ul className='nav-links'>
            <li><Link to='/'><i><AiIcons.AiFillHome /></i><p>Home</p></Link></li>
            <li><Link to='/discover'><i><AiIcons.AiFillCompass /></i><p>Discover</p></Link></li>
            <li><Link to='/reading'><i><AiIcons.AiFillEye /></i><p>Reading</p></Link></li>
            <li><Link to='/wishlist'><i><BsIcons.BsFillBookmarkFill /></i><p>Wishlist</p></Link></li>
            <li><Link to='/completed'><i><AiIcons.AiFillCheckCircle /></i><p>Completed</p></Link></li>
            <div className='active'></div>
        </ul>
    </div>
    </div>
  )
}

export default Sidenav