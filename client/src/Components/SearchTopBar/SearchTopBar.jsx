import React, { useState } from 'react';
import * as IcoIcons from 'react-icons/im'; 
import * as BsIcons from 'react-icons/bs';
import './SearchTopBar.css';
import { Link } from 'react-router-dom';
import Loggeduser from '../Loggeduser/Loggeduser';
import AdvancedSearch from './AdvancedSearch/AdvancedSearch';
import Logo2 from '../Logo2/Logo2';
function SearchTopBar() {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const advancedToggle = (e) => {
    e.preventDefault();
    setAdvancedSearch(!advancedSearch);
  }

  return (
    <div>
    <div className='toprow'>
      <Logo2 />
      <div className='header-search'>
        <form className='search-form'>
            <input type={'text'} className='searchbox' placeholder="Search by title, author, ISBN & topic" />
            <input type='submit' name='q' value='query' hidden/>
        </form> 
      </div>
      <button className='filter-btn' onClick={advancedToggle}>Filter</button>
      <Loggeduser />
    </div>
    <div className='filters'>
      <div></div>
      <div className='hidden-filters'>
        { advancedSearch ? <AdvancedSearch />: <p></p>}
      </div>
      <div></div>
      <div></div>
    </div>
    </div>
)
}

export default SearchTopBar