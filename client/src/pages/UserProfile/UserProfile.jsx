import React from 'react'
import Logo2 from '../../Components/Logo2/Logo2'
import Loggeduser from '../../Components/Loggeduser/Loggeduser'
import './UserProfile.css'
import user from './sami.jpg'

function UserProfile() {
  return (
    <div className='userprofile'>
        <div className='usertopbar'>
            <Logo2 />
            <Loggeduser />
        </div>
        <h1 className='userprofiletitle'>Customize Your Profile</h1>
        <form>

        <div className='profilegrid'>
            {/* <div className='dp'> */}
            <img src={user} className='dp' />
            {/* </div> */}
            <div className='information'>

            <div className='emailusername'>
                <h3 className='infotitle'>Account Information</h3>
                <div className='accountinfo'>
                    <label className="emailofaccount" >Email:</label>
                    <input className='userinfoinput' type="text" name='email' placeholder='Query from database' disabled/>
                    <label className="usernameofaccount" >Username:</label>
                    <input className='userinfoinput' type="text" name='username' placeholder='Query from database' required />
                </div>
            </div>

            <div className='passwordchange'>
                <h3 className='infotitle'>Change Password</h3>
                <div className='accountinfo'>
                    <label className="passwordofaccount" >Current Password:</label>
                    <input className='userinfoinput' type="password" name='password' placeholder='Current Password' required />
                    <label className="newpasswordofaccount" >New Password:</label>
                    <input className='userinfoinput' type="password" name='newpassword' placeholder='Provide New Password' required />
                    <label className="confirmnewpassword" >Confirm New Password:</label>
                    <input className='userinfoinput' type="password" name='confirmpassword' placeholder='Confirm new password' required />
                </div>
            </div>

            <div className='phonenumber'>
                <h3 className='infotitle'>Phone Number</h3>
                <div className='accountinfo'>
                    <label className="phoneofaccount" >Phone:</label>
                    <input className='userinfoinput' type="text" name='phone' placeholder='Query from database' required />
                </div>
            </div>
            <input className='savebutton' type={"submit"} value="Submit" />  

            </div>
        </div>
        </form>
    
    </div>

  )
}

export default UserProfile