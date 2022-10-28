import React, { useState } from 'react';
import * as IcoIcons from 'react-icons/im'; 
import * as BsIcons from 'react-icons/bs';
import './Header.css';
import { Link } from 'react-router-dom';
import Loggeduser from '../Loggeduser/Loggeduser';
import AdvancedSearch from '../../pages/AdvancedSearch/AdvancedSearch';
function Header() {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const advancedToggle = () => {
    setAdvancedSearch(!advancedSearch);
  }

  return (
    <div>
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
        <p className='advanced-search' onClick={advancedToggle}><i><BsIcons.BsFilter /></i>Filter</p>
      </div>
      <div className='children3'>
        <Loggeduser />
      </div>
    </div>
    { advancedSearch ? <AdvancedSearch />: <p></p>}
  </div>
)
}

export default Header