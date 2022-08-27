import React from 'react';
import * as IcoIcons from 'react-icons/im'; 
import './header.css';

function header() {
  return (
    <div className='parent'>
      <div className='children1'>
        <div className='box-container'>
          <table className='element-container'>
            <tr>
              <td>
                <input type={'text'} placeholder="Search" className='search'></input>
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
      <div className='logged-user'></div>
    </div>

    </div>
  )
}

export default header