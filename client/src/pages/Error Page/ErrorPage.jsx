import React from 'react';
import './ErrorPage.css';

function ErrorPage() {

    var code = '404';    //fetch this from props
    var msg69 = '69 is the only solution to your mental illness'
    var msg404 = 'Look like you\'re lost. The page you are looking for not avaible!'
  return (
    <div className='ErrorPage'>
        <h1 className='ErrorCode'>{code}!</h1>
        <div className="Img404"></div>
        <p className='ErrorMsg'>{code==='404' ? msg404:msg69}</p>
    </div>
  )
}

export default ErrorPage