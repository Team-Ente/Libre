import React, {useState, useEffect} from 'react';
import {getBook} from '../../../Components/Book/Book';
import './SearchResult.css';
import Animation from '../Animation';
function SearchResult(props) {

    const [readingList, setReadingList] = useState([]);
    const [trendingList, setTrendingList] = useState([]);
    const [recentList, setRecentList] = useState([]);
    const [editorsPickList, setEditorsPickList] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            fetch("http://localhost:3050/books/reading?count=4", {
                mode: "cors",
                credentials: "include"
            }).then((result) => {
                result.json().then((jsonResult) => {
                    setReadingList(jsonResult.books);
                });
            }, (reason) => {
                console.log(reason);
            });
            fetch("http://localhost:3050/books/trending?count=4", {
                mode: "cors",
                credentials: "include"
            }).then((result) => {
                result.json().then((jsonResult) => {
                    setTrendingList(jsonResult.books);
                });
            }, (reason) => {
                console.log(reason);
            });
            fetch("http://localhost:3050/books/recent?count=4", {
                mode: "cors",
                credentials: "include"
            }).then((result) => {
                result.json().then((jsonResult) => {
                    setRecentList(jsonResult.books);
                });
            }, (reason) => {
                console.log(reason);
            });
            fetch("http://localhost:3050/books/editor?count=4", {
                mode: "cors",
                credentials: "include"
            }).then((result) => {
                result.json().then((jsonResult) => {
                    setEditorsPickList(jsonResult.books);
                });
            }, (reason) => {
                console.log(reason);
            });
        };
        fetchData();
    }, []);

    return (
    <Animation>
        <div>
            <h2> Found {readingList.length} books</h2> 
            {/* put search query backend here, i pasted template code from Home.jsx */}
            {/* http://localhost:3000/home/query is the endpoint */}
            <div className='books'>
                {readingList.map(getBook)}
            </div>
        </div>
    </Animation>
    
    )
}

export default SearchResult