import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// BrowserRouter aliased as Router to your app.js file in order to wrap all the other components
// BrowserRouter is a parent component and can have only single child
// To render a single component, wrap all the routes inside the Routes Component
// Route component will now help us to establish the link between component’s UI and the URL

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />  
        </Routes>      
      </Router>
    </div>
  );
}

export default App;
