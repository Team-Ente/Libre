import React from 'react';
import * as IcoIcons from 'react-icons/im'; 
import { Link } from 'react-router-dom';
import "./Signup.css";
import Animation from '../Animation';
function Signup() {
  return (
    <Animation>

    <div className='Signup'>
        <div className="center">
        <Link to='/'><h1 className='icon'><i className='libre-icon'><IcoIcons.ImBooks /></i>Sign up</h1></Link>
        <form method="post" action='/signup'>
            <div className="txt_field">
              <input type="text" name='username' required />
              <span></span>
              <label>Username</label>
            </div>
            <div className="txt_field">
              <input type="text" name='email' required />
              <span></span>
              <label>Email</label>
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