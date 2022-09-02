import React from 'react';
import "./login.css";

function login() {
  return (
    <div>
        <div className="center">
        <h1>Login</h1>
        <form method="post">
            <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
            </div>
            <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="Login" />
            <div className="signup_link">
            Not a member? <a href="#">Signup</a>
            </div>
        </form>
        </div>
    </div>
  )
}

export default login