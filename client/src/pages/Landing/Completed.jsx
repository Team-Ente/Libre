import React, {useState, useEffect} from 'react';
import './Completed.css';
import {getBook} from '../../Components/Book/Book';
import Animation from './Animation';

function Completed() {

    const [completedList, setCompletedList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            fetch("http://localhost:3050/books/completed/4").then((result) => {
                result.json().then((jsonResult) => {
                    setCompletedList(jsonResult.books);
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
            <h2>The Books You've Read</h2>
            <div className='books'>
                    {completedList.map(getBook)}
                </div>
        </div>
    </Animation>
        
      )
}

export default Completed