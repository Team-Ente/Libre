import './App.css';
import Logo from './Components/Logo/logo';
import Header from './Components/header/header';
import Sidenav from './Components/Sidenav/Sidenav';
import Home from './pages/Home.jsx';
import Reading from './pages/Reading';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from './pages/Discover.jsx';
function App() {
  return (
    <BrowserRouter>

      <div className='App'>
        <div className='container'>
          <div className='logo'><Logo /><Sidenav /></div>
          <div className='header'><Header /></div>
          <div className='content'>    
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/discover' element={<Discover />} />
              <Route exact path='/reading' element={<Reading />} /> 
            </Routes>
          </div>
          <div className='footer'>footer</div>
        </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
