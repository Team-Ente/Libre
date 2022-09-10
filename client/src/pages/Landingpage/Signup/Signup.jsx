import React from 'react';
import { useState } from 'react';
import * as IcoIcons from 'react-icons/im'; 
import { Link } from 'react-router-dom';
import "./Signup.css";
import Animation from '../Animation';
function Signup() {
  const regex = /\S+@\S+\.\S+/;
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const checkEmail = (e) =>{
    setEmail(e.target.value);
    if(regex.test(email)===false) {
      setError('Please enter valid Email')
    } else {
      setError('');
      return true;
    }
  }
  return (
    <Animation>

    <div className='Signup'>
        <div className="center">
        <Link to='/'><h1 className='icon'><i className='libre-icon'><IcoIcons.ImBooks /></i>Sign up</h1></Link>
        <form method="post" action='/signup_user'>
            <div className="txt_field">
              <input type="text" name='handle' required />
              <span></span>
              <label>Username</label>
            </div>
            <div className="txt_field">
              <input type="text" name='email' onChange={checkEmail} required />
              <span></span>
              <label>Email</label>
            </div>
            <p className='email-error'>{error}</p>

            <div className="txt_field">
              <input type="text" name='firstName' required />
              <span></span>
              <label>First Name</label>
            </div>


            <div className="txt_field">
              <input type="text" name='lastName' required />
              <span></span>
              <label>Last Name</label>
            </div>
            <div className="txt_field">
              <input type="password" name='password' required />
              <span></span>
              <label>Password</label>
            </div>
            <div className="txt_field">
                <input type="password" name='confirm_password' required />
                <span></span>
                <label>Confirm Password</label>
            </div>
              <input type="submit" name='submit_btn' value="Sign up" />
              <div className="signup_link">
              Have an account? <Link to="/login">Login</Link>
            </div>
        </form>
        </div>
    </div>
  </Animation>  
  )
}

export default Signup