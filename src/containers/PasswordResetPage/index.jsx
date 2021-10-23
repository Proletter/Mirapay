import React, { useEffect } from 'react';
import PasswordResetPage from './components/PasswordResetPage';
import styles from './PasswordResetPage.module.css'
import { useState } from 'react';
import {Link, useParams, useHistory} from 'react-router-dom'
import { validatePasswordResetToken } from '../../utils/apiHandlers/validatePasswordResetToken';

const ResetPassword = () =>{
  const [tokenValid, setTokenValid] = useState(false)
  const {subroute, token} = useParams()

 const payload = {
    "token": token,
    "uid": subroute
  }


useEffect(()=>{
  async function validateToken(){
    try {
      const result = await validatePasswordResetToken(JSON.stringify(payload))
      if(result.data.status){
        setTokenValid(true)
      }else{
        setTokenValid(false)
      }
      
    } catch (error) {
      setTokenValid(false)
    }

  }

  validateToken()

},[])


return(
  <div className="account">
    <div className="account__wrapper">
      <div className={`${styles.container} account__card`}>
        { tokenValid ?
        <>
        <div className="account__head">
          <h4 className="account__subhead subhead">Would you like to reset your password?</h4>
        </div>
        <PasswordResetPage/>
        </>
        :
        <div>
        <p style={{
          marginBottom: "2em"
        }}>Token invalid. Please make another password reset request.</p>
         <Link className="btn btn-primary account__btn account__btn--small" to="/resetpassword">Go to password request page</Link>
        </div>
  
      }
      </div>
    </div>
  </div>
);
} 
export default ResetPassword;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
