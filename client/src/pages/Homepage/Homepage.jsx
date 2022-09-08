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
  return (
    <div className='Homepage'>
      <div className='container'>
        <div className='logo'><Logo /><Sidenav /></div>
        <div className='header'><Header /></div>
        <div className='content'>
          <AnimatePresence exitBeforeEnter>    
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/discover' element={<Discover />} />
              <Route path='/reading' element={<Reading />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/completed' element={<Completed />} />
            </Routes>
          </AnimatePresence>
        </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    </div>
  )
}

export default Homepage