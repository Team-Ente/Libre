import React, { useState } from 'react'
import './UserProfile.css'
import user from './sami.jpg'
import DefaultTopbar from '../../Components/DefaultTopbar/DefaultTopbar'
function UserProfile() {
    const [userEdit, setuserEdit] = useState(false);
    function toggleedit() {
        setuserEdit(!userEdit);
        // console.log(userEdit);
    }
  return (
    <div className='userprofile'>
        <DefaultTopbar />
        <h1 className='userprofiletitle'>Customize Your Profile</h1>
        <form>

        <div className='profilegrid'>
            {/* <div className='dp'> */}
            <img src={user} className='dp' />
            {/* </div> */}
            <div className='information'>

            <div className='emailusername'>
                <h3 className='infotitle'>Account Information</h3>
                <div className={userEdit? 'accountinfo':'accountinfonogap'}>
                    <label className="emailofaccount" >Email:</label>
                    <input className='userinfoinput' type="text" name='email' placeholder='Query from database' disabled={true}/>
                    <label className="usernameofaccount" >Username:</label>
                    <div className='usernametoggle'>
                        <button onClick={toggleedit} className={userEdit ? 'editbuttonsettings' : 'editbuttonsettingsclicked'}>Edit</button>
                        <input className='userinfoinput' type="text" name='username' placeholder='Query from database' required disabled={userEdit} />
                    </div>
                    <label className="usernameofaccount" ></label>
                    <div className='saveaccountinfo' hidden={userEdit ? true:false}>
                        <button className='save'>Save</button>
                        <span />
                        <button className='cancel'>Cancel</button>
                    </div>
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