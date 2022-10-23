import React from 'react';
import './BookDetails.css';

function BooksDetails() {
  return (
    <div className='bookdetails'>
      <div className='book-card-grid'>
        <div className='bookimg'>
        <img src={require('./35356.jpg')} style={{height: 500}}/>
        <div className='controlbtns'>
          <button className='details-control-btn'>Read Now</button>
          <button className='details-control-btn'>Add to wishlist</button>
        </div>
        </div>
        <div className='description'>

          <div className='title'>The Horni Stori of Sami</div>        
          <div className='author'>Tariquzzaman Faisal</div>
          <div className='summary'>
          This book is very good book. Many Many information many action scene
          Very hardcode action. Blood Sport involved. In cases individuals are beaten till they scream God's Name<br/>
          Includes mental abuse by a friend who are trying to teach a lesson to their classmate. 
          The story revolves around a boy sami who has recently discovered adult manga. While reading those exotic manga, one day he gets caught in the school library. He is then soon sent to his parents. Being confined in four walls, Sami becomes desperate for quality adult manga. So he contacts his local biri seller, Saikat to help. Seeing an opportunity, Saikat opens a startup where his main products are adult managa with a hole inside the book containing ganja. He hopes to become biribara within the next 5 years. Sami eventually manages to escape his house when a misfired missile by russia hits his bedroom wall, destroying it completely.
          <br/>
          Upon his release, Sami becomes an avid hentai reader. He becomes a leading Gunda of BiriBaba Gang after being lured by saikat's manga collection. Post world war 3, the world is now in chaos and gangs are trying to take over the city. The endangered city now requires a hero who can save them and bring order to this chaos. Learn how a simple boy becomes "Sami Man" to declare war against evil. Can "Sami man" save us using his horni powers? Only time will tell.
        </div>
        </div>
      </div>
    </div>
  )
}

export default BooksDetails