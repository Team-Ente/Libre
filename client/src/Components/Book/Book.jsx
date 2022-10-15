import React from 'react';
import {Link} from 'react-router-dom';
import './Book.css';

function getBook(book) { 
  return (
    <Book 
        img = {"data:" + book.mimeType + ";base64," + book.cover}
        title = {book.title}
        author = {book.creator}
        // year = {2001}
    />
  );
};


function Book(props) {

  const readBook = async () => {
    console.log(props);
  }

  return (
    <div className='wrapper'>
        <div className='card'>
            <img src={props.img} alt={props.title}/>
            <div className='info'>
                <h1 id='title'>{props.title}</h1>
                <p>{props.author}</p>
                <p>{props.year}</p>
                <Link to='/reader' className='button' onClick={readBook}>Read Now</Link>
            </div>
        </div>
    </div>
  );
}

export {getBook};
export default Book;