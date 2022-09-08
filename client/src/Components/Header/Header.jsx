import React from 'react';
import * as IcoIcons from 'react-icons/im'; 
import * as BsIcons from 'react-icons/bs';
import './Header.css';
import { Link } from 'react-router-dom';

function header() {
  return (
    <div className='parent'>
      <div className='children1'>
        <div className='box-container2  '>
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
    
      <div className='children2'>
        {/* <div className='advanced-search'>Advanced</div> */}
        {/* <input type="submit" value="Login" /> */}
        <p className='advanced-search'><Link to='/home/search'><i><BsIcons.BsFilter /></i>Filter</Link></p>
      </div>
      <div className='children3'>
        <div className='logged-user'></div>
      </div>

    </div>
  )
}

export default header