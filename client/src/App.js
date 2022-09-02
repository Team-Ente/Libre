import React from 'react'
import Discover from './pages/Landing/Discover';
import Wishlist from './pages/Landing/Wishlist';
import Completed from './pages/Landing/Completed';
import Logo from './Components/Logo/logo';
import Header from './Components/header/header';
import Sidenav from './Components/Sidenav/Sidenav';
import Home from './pages/Landing/Home';
import Reading from './pages/Landing/Reading';
import Login from './pages/Login';
import Signup from './pages/Signup';
import "./App.css";
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div>

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
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
              </Routes>
            </AnimatePresence>
          </div>
          {/* <div className='footer'>footer</div> */}
        </div>
    </div>
  )
}

export default App