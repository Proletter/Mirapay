import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ResetPassword.module.css'
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon'
import Spinner from 'react-spinner-material'
import { resetPasswordRequest } from '../../../utils/apiHandlers/sendResetPasswordRequest';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'



const ResetPasswordForm = ({ updateRequestEmail }) => {
  const [email, setUserEmail] = useState("")
  const [resetRequestSent, setResetRequestSent] = useState(false)

  async function resetUserPassword(email){
    const userEmail = {
      "email":email
    }
    try {
      const result = await resetPasswordRequest(userEmail)
      updateRequestEmail(userEmail.email)
      console.log("request sent", result)
      if(result.data.status){
        Swal.fire({
          title: "",
          text: result.data.detail,
          icon: "success",
          showConfirmButton: false,
          timer: 3000
          
        })
        setResetRequestSent(false)
       
      }
      console.log(result)
      
      
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: "",
        text: "An Error Occured",
        icon: "error",
        showConfirmButton: false,
        timer: 3000
      })
      setResetRequestSent(false)
    }
   

  }


  return (
    <div className={styles.container}>
    <form className="form" >
      <div className="form__form-group">
        <span className="form__form-group-label">Email</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
          <AlternateEmailIcon/>
          </div>
          <input
            onChange={(e)=>setUserEmail(e.target.value)}
            name="email"
            type="email"
            required
            placeholder="please enter your account's email"
          />
        </div>
      </div>
      
    
      <button 
      disabled={resetRequestSent}
      onClick={(e)=>{
        setResetRequestSent(true)
        e.preventDefault()
        return resetUserPassword(email)
      }}className={`${styles.btn_reset_color} btn btn-primary account__btn account__btn--small`}>
      {resetRequestSent ?
        "Sending"
      :
      "Send reset password email"
      }</button>
      <div className={styles.bottom_text}>
     <Link to="/signin">Go back Back to signin</Link>
      </div>
    </form>
    </div> 
    
  );
};

// LogInForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

export default ResetPasswordForm
