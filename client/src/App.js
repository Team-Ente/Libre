import React from 'react'
import Homepage from './pages/Homepage/Homepage';
import Landingpage from './pages/Landingpage/Landingpage';
import Reader from './pages/Reader/Reader';
import Error401 from './pages/Error Page/Error401';
import Error404 from './pages/Error Page/Error404';
import BooksDetails from './pages/BookDetails/BooksDetails';
import { Route, Routes } from 'react-router-dom';
function App() {


  return (
      <div className='App'>
        <Routes>
          <Route path='/*' element={<Landingpage />} />
          <Route path='/home/*' element={<Homepage/>} />
          <Route path='/reader' element={<Reader/>} />
          <Route path='/error404' element={<Error404 />} />
          <Route path='/error401' element={<Error401 />} />
          <Route path='/bookdetails' element={<BooksDetails />} />
        </Routes>
      </div>
  );
}

export default App