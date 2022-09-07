import React from 'react';

import Discover from './Discover/Discover';
import Wishlist from './Wishlist/Wishlist';
import Completed from './Completed/Completed';
import Reading from './Reading/Reading';
import Home from './Home/Home';

import Logo from '../../Components/Logo/Logo';
import Header from '../../Components/Header/Header';
import Sidenav from '../../Components/Sidenav/Sidenav';

import { AnimatePresence } from 'framer-motion';
import {Routes, Route, useLocation} from 'react-router-dom';

import './Homepage.css';

function Homepage() {
  const location = useLocation();
  return (
    <div className='Homepage'>
      <div className='container'>
        <div className='logo'><Logo /><Sidenav /></div>
        <div className='header'><Header /></div>
        <div className='content'>
          <AnimatePresence exitBeforeEnter>    
            <Routes key={location.pathname} location={location}>
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/discover' element={<Discover />} />
              <Route exact path='/reading' element={<Reading />} />
              <Route exact path='/wishlist' element={<Wishlist />} />
              <Route exact path='/completed' element={<Completed />} />
            </Routes>
          </AnimatePresence>
        </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    </div>
  )
}

export default Homepage