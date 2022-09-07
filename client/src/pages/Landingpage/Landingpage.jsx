import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Initial from './Initial/Initial';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function Landingpage() {
  const location = useLocation();
  return (
    <div>
      <Routes key={location.pathname} location={location}>
        <Route exact path = '/' element={<Initial />} />
        <Route path = '/login' element={<Login />} />
        <Route path = '/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default Landingpage