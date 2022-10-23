import React from 'react';
import './ErrorPage.css';

function ErrorPage() {

    var code = '401';    //fetch this from props
    var msg401 = 'Stop in the name of law! You are not authorized to access this page'
    var msg404 = 'Look like you\'re lost. The page you are looking for not avaible!'
  return (
    <div className='ErrorPage'>
        <h1 className='ErrorCode'>{code}!</h1>
        <img className='ErrorImg' src={code === '404' ? require('./404.gif') : require('./401.jpg') } />
        <p className='ErrorMsg'>{code==='404' ? msg404:msg401}</p>
    </div>
  )
}

export default ErrorPage