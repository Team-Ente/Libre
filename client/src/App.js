import './App.css';
import Logo from './Components/Logo/logo';
import Header from './Components/header/header';
import Sidenav from './Components/Sidenav/Sidenav';
function App() {
  return (
    <div className='App'>
        <div className='container'>
          <div className='logo'><Logo /><Sidenav /></div>
          <div className='header'><Header /></div>
          {/* <div className='nav'><Sidenav /></div> */}
          <div className='content'>Content</div>
          <div className='footer'>footer</div>
        </div>
    </div>
  );
}

export default App;
