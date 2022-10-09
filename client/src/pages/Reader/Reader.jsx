import React from 'react';
import './Reader.css'
import Sidebar from '../../Components/TableofContents/Sidebar.jsx';
function Reader(props) {
  return (
    <div className='body'>
      
      <header>
        <span className='inner-text'>Book Name</span>
      </header>

      <div className='main-container'>
      
        <aside className='sidebar'>
          {/* <span className='inner-text'>Sidebar</span> */}
          <Sidebar />
        </aside>
      
        <main className='content'>
          <div className='book'>
            <span className='inner-text'>Content Area</span>
            {/* <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/2' element={<Discover />} />
            </Routes> */}
          </div>
          <div className='page-control'>
            <button>Prev</button>
            <button>Next</button>
          </div>
        </main>
      
      </div>

    </div>
  )
}

export default Reader