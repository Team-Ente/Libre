import React from 'react';
import "./Login.css";

function Login() {
  return (
    <div>
        <div className="center">
        <h1>Login</h1>
        <form method="post">
            <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Email</label>
            </div>
            <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="Login" />
            <div className="signup_link">
            Not a member? <a href="/signup">Signup</a>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login