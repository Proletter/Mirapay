import React from 'react';
import ResetPass from './components/ResetPassword';
import styles from './ResetPassword.module.css'
import { useState } from 'react';

const ResetPassword = () =>{
const [passRequestEmail, setPassRequestEmall] = useState('')
const updateRequestEmail=(email)=>{
setPassRequestEmall(email)
}


return(
  <div className="account">
    <div className="account__wrapper">
      <div className={`${styles.container} account__card`}>
     
        <>
        <div className="account__head">
          <h4 className="account__subhead subhead">Would you like to reset your password?</h4>
        </div>
        <ResetPass updateRequestEmail={updateRequestEmail} />
        </>
      </div>
    </div>
  </div>
);
} 
export default ResetPassword;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
