import React, { useEffect } from 'react'
import Homepage from './pages/Homepage/Homepage';
import Landingpage from './pages/Landingpage/Landingpage';
import Reader from './pages/Reader/Reader';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
function App() {

  const [toc, setToc] = useState([]);
  const [pages, setPages] = useState([]);

  const book = "LN_test_1";
  const chapter = "chapter002";

  useEffect(() => {
    // check logged in user
    const fetchData = async () => {
        fetch("http://localhost:3050/read?book="+book, {
            mode: "cors",
            credentials: "include"
        }).then((result) => {
            result.json().then((jsonResult) => {
                setToc(jsonResult.contents);
                setPages(jsonResult.pages)
            });   
        }, (reason) => {
            console.log(reason);
        });
    };
    fetchData();
  }, []);

  return (
      <div className='App'>
        <Routes>
          <Route path='/*' element={<Landingpage />} />
          <Route path='/home/*' element={<Homepage />} />
          <Route path='/reader' element={<Reader book={book} chapter={chapter} toc={toc} pages={pages}/>} />
        </Routes>
      </div>
  );
}

export default App