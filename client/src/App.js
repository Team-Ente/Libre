import React from 'react'
import Homepage from './pages/Homepage/Homepage';
import Landingpage from './pages/Landingpage/Landingpage';
import { Route, Routes, useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  return (
      <div className='App'>
        <Landingpage />
        <Routes key={location.pathname} location={location}>
          <Route exact path='/' element={<Landingpage />} />
          <Route exact path='/home' element={<Homepage />} />
        </Routes>
      </div>
  );
}

export default App