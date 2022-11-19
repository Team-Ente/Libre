import React, { useState, useNavigate } from 'react';
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

  const navigate = useNavigate();
  const onSubmit = async (e) => {
      const genre = e.target.genre.value?`genre=${e.target.genre.value}`:'';
      const title = e.target.title.value?`title=${e.target.title.value}`:'';
      const author = e.target.author.value?`author=${e.target.author.value}`:'';
      const edition = e.target.edition.value?`edition=${e.target.edition.value}`:'';
      const language = e.target.language.value?`language=${e.target.language.value}`:'';
      navigate(`/search?${title}&${author}&${genre}&${edition}&${language}`);
  }

  return (
    <div>
    <form>
      <div className='toprow'>
        <Logo2 />
        <div className='header-search'>
          <form onSubmit={onSubmit} className='search-form-main'>
              <input type={'text'} name='query' className='searchbox-main' placeholder="Search by title, author, ISBN & topic" />
              <input type='submit' hidden/>
              <div className='hidden-filters-main'>{ advancedSearch ? <AdvancedSearch />: <p></p>}</div>
          </form>  
        </div>
        <button className='filter-btn' onClick={advancedToggle}>Filter</button>
        <Loggeduser />
      </div>
      <div className='filters'>
        <div></div>
        {/* <div className='hidden-filters'>
          { advancedSearch ? <AdvancedSearch />: <p></p>}
        </div> */}
        <div></div>
        <div></div>
      </div>
    </form>
    </div>
)
}

export default SearchTopBar