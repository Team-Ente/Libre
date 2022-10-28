import React from 'react'
import Homepage from './pages/Homepage/Homepage';
import Landingpage from './pages/Landingpage/Landingpage';
import Reader from './pages/Reader/Reader';
import Login from './pages/Landingpage/Login/Login';
import Signup from './pages/Landingpage/Signup/Signup';
import Error401 from './pages/Error Page/Error401';
import Error404 from './pages/Error Page/Error404';
import BooksDetails from './pages/BookDetails/BooksDetails';
import { Route, Routes } from 'react-router-dom';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage'
function App() {


  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path ='/login' element={<Login />} />
          <Route path ='/discover' element={<DiscoverPage />} />
          <Route path ='/signup' element={<Signup />} />
          <Route path='/home/*' element={<Homepage/>} />
          <Route path='/reader' element={<Reader/>} />
          <Route path='/unauthorized' element={<Error401 />} />
          <Route path='/book' element={<BooksDetails />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
  );
}

export default App