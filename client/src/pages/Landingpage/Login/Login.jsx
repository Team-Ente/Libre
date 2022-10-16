import React from 'react';
import * as IcoIcons from 'react-icons/im'; 
import * as AiIcons from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import Animation from '../Animation';

function showPassFunc() {
  var x = document.getElementById("passInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function Login() {
  
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();

    const data = {
      emailOrHandle: e.target.emailOrHandle.value,
      password: e.target.password.value
    };

    var formBody = [];
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    

    fetch('http://localhost:3050/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
      credentials: 'include' 
    }).then((response) => {
      response.json().then((jsonResponse) => {
        if (! jsonResponse.error) {
          console.log(jsonResponse);
          localStorage.setItem('logged-in-user', JSON.stringify(jsonResponse));
          navigate("/home");
        } else {
          // invalid login
          console.log(jsonResponse.error);
        }
      });  
      
    }); 
  };

  return (
    <Animation>

    <div className='Login'>
        <div className="center">
        <Link to='/'><h1 className='icon'><i className='libre-icon'><IcoIcons.ImBooks /></i>Login</h1></Link>
        <form onSubmit={Auth}>
            <div className="txt_field">
              <input type="text" name='emailOrHandle' required />
              <span></span>
              <label>Username or Email</label>
            </div>
              <div className="txt_field">
                <input type="password" name='password' id='passInput' required />
                <span></span>
                <label>Password</label>
                <div className='showpass' onClick={showPassFunc}><AiIcons.AiFillEyeInvisible /></div> 
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