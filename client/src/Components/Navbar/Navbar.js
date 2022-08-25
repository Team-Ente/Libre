import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <nav>
            <div className='icon'>Libre</div>
            <div className='wrap'>
            <div className='search'>
            {/* <input type="text" className='searchTerm' placeholder="What are you looking for?"> */}
                <input type={"text"} className='searchTerm' placeholder='Search by title, author, ISBN or topic'></input>
                <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
            <div className='user'>T</div>
        </nav>
    </div>
  )
}

export default Navbar