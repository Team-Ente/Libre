import React, {useState, useEffect} from 'react';
import {getBook} from '../../../Components/Book/Book';
import './SearchResult.css';
import Animation from '../Animation';
import DefaultTopbar from '../../../Components/DefaultTopbar/DefaultTopbar';
import Sidenav from '../../../Components/Sidenav/Sidenav';
import Logo from '../../../Components/Logo/Logo';
import Header from '../../../Components/Header/Header';
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
    <div className='searchbookgrid'>
        <div>
            <div className='logo'><Logo /><Sidenav /></div>
        </div>
        <div>
            <div className='header'><Header /></div>
            <div className='sidenav-content'></div>
            <h2 className='searchcounter'> Found {readingList.length} books</h2> 
            {/* put search query backend here, i pasted template code from Home.jsx */}
            {/* http://localhost:3000/home/query is the endpoint */}
            <div className='books'>
                {readingList.map(getBook)}
            </div>
        </div>
    </div>
    </Animation>
    
    )
}

export default SearchResult