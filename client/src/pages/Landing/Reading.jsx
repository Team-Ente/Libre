import React, {useState, useEffect} from 'react';
import {getBook} from '../../Components/Book/Book';
import './Reading.css';
import Animation from './Animation';
function Reading() {  
    const [readingList, setReadingList] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            fetch("http://localhost:3050/books/all/4").then((result) => {
                result.json().then((jsonResult) => {
                    setReadingList(jsonResult.books);
                });
            }, (reason) => {
                console.log(reason);
            });
        };
        fetchData();
    }, []);

  return (
    <Animation>
    <div className='group'>
        <h2>Resume From Where you left</h2>
        <div className='books'>
            {readingList.map(getBook)}
            </div>
    </div>
    </Animation>
  )
}

export default Reading