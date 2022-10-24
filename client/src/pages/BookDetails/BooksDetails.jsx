import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookDetails.css';

function BooksDetails() {

  const {state} = useLocation();
  const data = state;

  const navigate = useNavigate();
  const readBook = async () => {
    
    fetch("http://localhost:3050/read?book="+data.id, {
        mode: "cors",
        credentials: "include"
    }).then((result) => {
        result.json().then((jsonResult) => {
            const toc = jsonResult.contents;
            const pages = jsonResult.pages;
            
            navigate('/reader', {
              state: {
                id: data.id,
                title: data.title,
                // chapter: chapter, 
                toc: toc, 
                pages: pages
              }
            });

        });   
    }, (reason) => {
        console.log(reason);
    });

  };
  return (
    <div className='bookdetails'>
      <div className='book-card-grid'>
        <div className='bookimg'>
        <img src={data.img} alt={data.title} style={{height: 500}}/>
        <div className='controlbtns'>
          <button className='details-control-btn' onClick={readBook}>Read Now</button>
          <button className='details-control-btn'>Add to wishlist</button>
        </div>
        </div>
        <div className='description'>

          <div className='title'>{data.title}</div>        
          <div className='author'>{data.author}</div>
          <div className='summary'>
          George Orwell's nineteen Eighty-Four is one of the most definitive texts of modern literature. Set in Oceania, one of the three inter-continental superstate that divided the world among themselves after a global war, Orwell's masterful critique of the political structures of the time, works itself out through the story of Winston Smith, a man caught in the webs of a dystopian future, and his clandestine love affair with Julia, a young woman he meets during the course of his work for the government. As much as it is an entertaining read, nineteen Eighty-Four is also a brilliant, and more importantly, a timeless satirical attack on the social and political structures of the world.
          </div>
        </div>
      </div>
      <div className='additional-info'>
        <p className='language'>Language: English</p>
        <p className='publisher'>Publisher: GroMedia</p>
        <p className='topic'>Topic: Literature</p>
        <p className='format'>Format: ePub & PDF</p>
        <p className='year'>Publishing Year: 2021</p>
        <p className='ISBN'>ISBN: 9782291963134</p>
      </div>
    </div>
  )
}

export default BooksDetails