import React, { useEffect } from 'react'
import Homepage from './pages/Homepage/Homepage';
import Landingpage from './pages/Landingpage/Landingpage';
import Reader from './pages/Reader/Reader';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
function App() {

  const [toc, setToc] = useState([]);
  const [pages, setPages] = useState([]);

  const [book, setBook] = useState("LN_test_1");
  const [chapter, setChapter] = useState("chapter002");

  // const setReaderBook = async (newBook, newChapter) => {
  //   setBook(newBook);
  //   if(chapter) setChapter(newChapter);
  //   fetch("http://localhost:3050/read?book="+book, {
  //       mode: "cors",
  //       credentials: "include"
  //   }).then((result) => {
  //       result.json().then((jsonResult) => {
  //           setToc(jsonResult.contents);
  //           setPages(jsonResult.pages)
  //       });   
  //   }, (reason) => {
  //       console.log(reason);
  //   });
  // }

  // useEffect(() => {
  //   // check logged in user

  //   setReaderBook(book, chapter);
  // });

  return (
      <div className='App'>
        <Routes>
          <Route path='/*' element={<Landingpage />} />
          <Route path='/home/*' element={<Homepage/>} />
          <Route path='/reader' element={<Reader state={
            {
              book: book,
              chapter: chapter, 
              toc: toc, 
              pages: pages
            }
          }
          />} />
        </Routes>
      </div>
  );
}

export default App