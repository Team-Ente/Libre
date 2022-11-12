import React from 'react'
import Logo2 from '../../../Components/Logo2/Logo2'
import AdvancedSearch from '../../../Components/SearchTopBar/AdvancedSearch/AdvancedSearch'
import { useState } from 'react';
import './SearchResult.css'
function Searchresult() {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const advancedToggle = (e) => {
    e.preventDefault();
    setAdvancedSearch(!advancedSearch);
  }
  const [readingList, setReadingList] = useState([]);
  const total=8;
  return (
    <div>
    <div className='toprowsearch'>
      <Logo2 />
      <div className='header-search-main'>
        <form className='search-form-main'>
            <input type={'text'} className='searchbox-main' placeholder="Search by title, author, ISBN & topic" />
            <input type='submit' name='q' value='query' hidden/>
        </form> 
      </div>
      <button className='filter-btn' onClick={advancedToggle}>Filter</button>
    </div>
    <div className='filters-main'>
      <div></div>
      <div>
        <div className='hidden-filters-main'>{ advancedSearch ? <AdvancedSearch />: <p></p>}</div>
        <h2 className='titleofcount'>Showing {total} results</h2>
        {/* <div className='books'>{readingList.map(getBook)}</div>  */} 
        {/*Find the query yourself */}
      </div>
      <div></div>
    </div>

    </div>
  )
}

export default Searchresult