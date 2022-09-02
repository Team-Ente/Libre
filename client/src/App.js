import './App.css';
import Logo from './Components/Logo/logo';
import Header from './Components/header/header';
import Sidenav from './Components/Sidenav/Sidenav';
import Home from './pages/Landing/Home';
import Reading from './pages/Landing/Reading';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Discover from './pages/Landing/Discover';
import Wishlist from './pages/Landing/Wishlist';
import Completed from './pages/Landing/Completed';
import login from './pages/login&signup/login';
import signup from './pages/login&signup/signup';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();
  return (
    
      <div className='App'>
        <div className='container'>
          <div className='logo'><Logo /><Sidenav /></div>
          <div className='header'><Header /></div>
          <div className='content'>
            <AnimatePresence exitBeforeEnter>    
              <Routes key={location.pathname} location={location}>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/discover' element={<Discover />} />
                <Route exact path='/reading' element={<Reading />} />
                <Route exact path='/wishlist' element={<Wishlist />} />
              </Routes>
            </AnimatePresence>
          </div>
          {/* <div className='footer'>footer</div> */}
        </div>
    </div>
    
  );
}

export default App;
