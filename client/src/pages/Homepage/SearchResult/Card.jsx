import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'
import bookimg from './35356.jpg'
function Card(props) {
    return (
        <div className='wrapper'>
            <Link to='/book' className='card'>
                <img src={bookimg} alt={props.title}/>
                <div className='info'>
                    <h1 id='title'>{props.title}</h1>
                    <p>{props.author}</p>
                    <p>{props.year}</p>
                    <div className='button'>Read Now</div>
                </div>
            </Link>
        </div>
    );
}

export default Card