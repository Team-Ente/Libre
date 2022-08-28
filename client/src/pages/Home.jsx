import React, {useState, useEffect} from 'react';
import Book from '../Components/Book/Book';
import './Home.css';
import Animation from './Animation';

function getBook(book) {
    return (<Book 
                img = {"data:" + book.mimeType + ";base64," + book.cover}
                title = {book.title}
                author = {book.creator}
                year = {2001}
            />);
}

function Home() {

    const [readingList, setReadingList] = useState([]);
    const [trendingList, setTrendingList] = useState([]);
    const [recentList, setRecentList] = useState([]);
    const [editorsPickList, setEditorsPickList] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:3050/books");
            const jsonResult = await result.json();
            setReadingList(jsonResult["books"]);
            setTrendingList(jsonResult["books"]);
            setRecentList(jsonResult["books"]);
            setEditorsPickList(jsonResult["books"]);
        }
        fetchData();
    }, []);

    return (
    <Animation>
        <div>
            <h2 >Now Reading {readingList.length} books</h2>
            <div className='books'>

                {readingList.map(getBook)}

                {/* <Book
                    img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                    title='The Dictatorship Syndrome'
                    author='Alaa Al Aswany'
                    year='2019'
                />
                <Book
                    img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                    title='Liberation'
                    author='Sami Khan'
                    year='2022'
                /> */}
                {/* <Book
                    img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                    title='Liberation'
                    author='Sami Khan'                         
                    year='2022'
                />
                <Book
                    img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                    title='Liberation'
                    author='Sami Khan'
                    year='2022'
                /> */}
            </div>

            <h2>Trending</h2>
            <div className='books'>
                {trendingList.map(getBook)}
            </div>

            <h2>Recently Added</h2>
            <div className='books'>
                {recentList.map(getBook)}
            </div>

            <h2>Editors Pick</h2>
            <div className='books'>
                {editorsPickList.map(getBook)}
            </div>

        </div>
    </Animation>
    
    )
}

export default Home