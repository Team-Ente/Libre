import React from 'react'
import Homepage from './pages/Homepage/Homepage';
import Landingpage from './pages/Landingpage/Landingpage';
import Reader from './pages/Reader/Reader';
import { Route, Routes, useLocation } from 'react-router-dom';
function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/*' element={<Landingpage />} />
          <Route path='/home/*' element={<Homepage />} />
          <Route path='/reader/*' element={<Reader book="LN_test_1" chapter="toc"/>} />
        </Routes>
      </div>
  );
}

export default App