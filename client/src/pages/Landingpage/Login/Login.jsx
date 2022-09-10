import React from 'react';
import { useState } from 'react';
import * as IcoIcons from 'react-icons/im'; 
import { Link } from 'react-router-dom';
import "./Login.css";
import Animation from '../Animation';
function Login() {
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const [pass, setPass] = useState('');
  const [pvalid, setPvalid] = useState('');

  const checkPass = (e) => {
    console.log(e.target.value);
    setPass(e.target.value);
    if(passRegex.test(pass)===false) {
      setPvalid('Please enter a valid password');
    } else {
      setPvalid('');
      return true;
    }
  }
  return (
    <Animation>

    <div className='Login'>
        <div className="center">
        <Link to='/'><h1 className='icon'><i className='libre-icon'><IcoIcons.ImBooks /></i>Login</h1></Link>
        <form method="post" action='/login_user'>
            <div className="txt_field">
              <input type="text" name='emailOrHandle' required />
              <span></span>
              <label>Username or Email</label>
            </div>
            <div className="txt_field">
              <input type="password" name='password' onChange={checkPass} required />
              <span></span>
              <label>Password</label>
            </div>
            <p className='email-error'>{pvalid}</p>

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