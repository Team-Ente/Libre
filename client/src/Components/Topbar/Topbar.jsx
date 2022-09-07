import React from 'react';
import Logo from '../Logo/Logo';
import * as IcoIcons from 'react-icons/im'; 

import './Topbar.css';
function Topbar() {
  return (
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
            <li>Login</li>
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
      </div>
      

    </div>
  )
}

export default Topbar;