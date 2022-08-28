import React from 'react';
import './Book.css';

function Book(props) {
  return (
    <div className='wrapper'>
        <div className='card'>
            <img src={props.img}/>
            <div className='info'>
                <h1>{props.title}</h1>
                <p>{props.author}</p>
                <p>{props.year}</p>
                <button className='button'>Read Now</button>
            </div>
        </div>
    </div>
  )
}

export default Book