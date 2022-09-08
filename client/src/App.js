import React from 'react'
import Homepage from './pages/Homepage/Homepage';
import Landingpage from './pages/Landingpage/Landingpage';
import { Route, Routes, useLocation } from 'react-router-dom';
function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/*' element={<Landingpage />} />
          <Route path='/home/*' element={<Homepage />} />
        </Routes>
      </div>
  );
}

export default App