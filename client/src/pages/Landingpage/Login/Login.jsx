import React from 'react';
import * as IcoIcons from 'react-icons/im'; 
import { Link } from 'react-router-dom';
import "./Login.css";
import Animation from '../Animation';
function Login() {
  return (
    <Animation>

    <div className='Login'>
        <div className="center">
        <Link to='/'><h1 className='icon'><i className='libre-icon'><IcoIcons.ImBooks /></i>Login</h1></Link>
        <form method="post" action='/login'>
            <div className="txt_field">
              <input type="text" name='username_email' required />
              <span></span>
              <label>Username or Email</label>
            </div>
            <div className="txt_field">
              <input type="password" name='password' required />
              <span></span>
              <label>Password</label>
            </div>
              <div className="pass">Forgot Password?</div>
              <input type="submit" name='login_btn' value="Login" />
              <div className="signup_link">Not a member? <Link to="/signup">Signup</Link>
            </div>
        </form>
        </div>
    </div>
    
    </Animation>
  )
}

export default Login