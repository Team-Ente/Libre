import React, { useState } from 'react';
import * as IcoIcons from 'react-icons/im'; 
import * as BsIcons from 'react-icons/bs';
import './Header.css';
import { Link } from 'react-router-dom';
import Loggeduser from '../Loggeduser/Loggeduser';
import AdvancedSearch from './AdvancedSearch/AdvancedSearch';
function Header() {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const advancedToggle = (e) => {
    e.preventDefault();
    setAdvancedSearch(!advancedSearch);
  }

  return (
    <div>
    <div className='header-search'>
        <form className='search-form'>
          <div className='search-box-part'>
            <input type={'text'} className='searchbox' placeholder="Search by title, author, ISBN & topic" />
            <i className='search-logo-icn'><IcoIcons.ImSearch /></i>
          </div>
          <input type='submit' name='q' value='query' hidden/>
          <button className='filter-btn' onClick={advancedToggle}>Filter</button>
        </form>
        
        <div className='logged-user'>
          <Loggeduser />
        </div>
        <input type="submit" hidden />
      </div>
        
        <div className='hidden-filters'>
          { advancedSearch ? <AdvancedSearch />: <p></p>}
        </div>
    </div>
)
}

export default Header