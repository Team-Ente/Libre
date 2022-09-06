import React, {useState, useEffect} from 'react';
import './Wishlist.css';
import {getBook} from '../../Components/Book/Book';
import Animation from './Animation';
function Wishlist() {

    const [bucketList, setBucketList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            fetch("http://localhost:3050/books/bucket?count=4").then((result) => {
                result.json().then((jsonResult) => {
                    setBucketList(jsonResult.books);
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
            <h2>Your Bucket List</h2>
            <div className='books'>
                {bucketList.map(getBook)}  
            </div>
        </div>
        </Animation>
      )
}

export default Wishlist