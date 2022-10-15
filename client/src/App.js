import React from 'react'
import Homepage from './pages/Homepage/Homepage';
import Landingpage from './pages/Landingpage/Landingpage';
import Reader from './pages/Reader/Reader';
import { Route, Routes } from 'react-router-dom';
function App() {


  return (
      <div className='App'>
        <Routes>
          <Route path='/*' element={<Landingpage />} />
          <Route path='/home/*' element={<Homepage/>} />
          <Route path='/reader' element={<Reader/>} />
        </Routes>
      </div>
  );
}

export default App