import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Initial from './Initial/Initial';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from '../Homepage/Home/Home';

function Landingpage() {
  return (
    <Routes>
      <Route path = '/' element={<Initial />} />
      
      <Route path = '/home' element={<Home />} />
    </Routes>
  )
}

export default Landingpage