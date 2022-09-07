import React from 'react';
import Discover from '../../Homepage/Discover/Discover';
import Logo from '../../../Components/Logo/Logo';
import * as IcoIcons from 'react-icons/im'; 
import Animation from '../Animation';
import './Initial.css';
import { Link } from 'react-router-dom';
function Topbar() {
  return (
    <Animation>

    <div>
      <div className="top-row">
        
        <div className="col-logo">
          <Logo />
        </div>
        <div className="col-links">
          <ul className='toplist'>
            <li>Discover</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
          <p>Menu</p>
        </div>
      </div>
      
      <div className="hero">
        <p className='hero-text'>Unlock Knowledge</p>
        <p className='hero-description'>With Libre's online library of books, academic texts and tools, trusted by students worldwide.</p>
        <div className='box-container'>
          <table className='element-container'>
            <tr>
              <td>
                <input type={'text'} placeholder="Search by title, author, ISBN & topic" className='search'></input>
              </td>
              <td>
                <a href='#' className='search-logo'>
                  <i><IcoIcons.ImSearch /></i>
                </a>
              </td>
            </tr>
          </table>
        </div>

        <div className="showoff">
          <div className='sitem'>
            <img src="https://cdn-icons-png.flaticon.com/512/3389/3389081.png" alt="books" />
            <p>Unlimited access to 900,000 books</p>
          </div>

          <div className='sitem'>
            <img src="https://cdn-icons-png.flaticon.com/512/718/718970.png" alt="books" />
            <p>Over 950 Topics and subtopics to choose from</p>
          </div>

          <div className='sitem'>
            <img src="https://cdn-icons-png.flaticon.com/512/2443/2443649.png" alt="books" />
            <p>Save your time using our built in Ebook Tools</p>
          </div>

          <div className='sitem'>
            <img src="https://cdn-icons-png.flaticon.com/512/896/896317.png" alt="books" />
            <p>Read anytime, anywhere, on any device</p>
          </div>  
        </div>
      </div>

      <div className="discover">
        <div className="dis-title">
          <p>Go beyond your Reading list</p>
          <p>View All topics</p>
        </div>
        <Discover />
      </div>
    </div>
  </Animation>
    
  )
}

export default Topbar;