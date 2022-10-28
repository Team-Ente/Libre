import React from 'react'
import { Link } from 'react-router-dom'
import Discover from '../Homepage/Discover/Discover'
import Logo from '../../Components/Logo/Logo'
import Cookies from 'js-cookie';
import './DiscoverPage.css'
import Animation from '../Homepage/Animation';

function DiscoverPage() {
  return (
    <Animation>
    <div>
        <div className="top-row">
        
        <div className="col-logo">
          <Logo />
        </div>
        <div className="col-links">
          <ul className='toplist'>
            <li><Link to={"/"}>Home</Link></li>
            <li className='activelanding'>Discover</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li><Link to={Cookies.get('access_token')?'/home':'/login'}>Login</Link></li>
          </ul>
        </div>
        
      </div>
      <div className="discover">
        <Discover />
      </div>
    </div>
    </Animation>
  )
}

export default DiscoverPage