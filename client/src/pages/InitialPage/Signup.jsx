import React from 'react';
import "./signup.css";
function Signup() {
  return (
    <div>
        <div className="center">
        <h1>Signup</h1>
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
            <div className="txt_field">
                <input type="password" required />
                <span></span>
                <label>Confirm Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="Login" />
            <div className="signup_link">
            Have an account? <a href="/login">Login</a>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup