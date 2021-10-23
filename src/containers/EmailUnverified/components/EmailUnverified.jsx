import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './EmailUnverified.module.css'
import emailgif from '../../../shared/img/emailverification.gif'
import emailsvg from '../../../shared/img/emailverification.svg'
import { sendEmailVerification } from '../../../utils/apiHandlers/sendEmailVerification';
import { verifyEmail } from '../../../utils/apiHandlers/verifyEmail';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-spinner-material'
import Swal from 'sweetalert2'
import emailverifiedpostive from '../../../shared/img/emailverifiedpositive.svg'
import {Link, useParams, useHistory} from 'react-router-dom'
import { setUserEmailVerification } from '../../../redux/features/user/userSlice';
import { useTimer } from 'react-timer-hook';
import { useLocation } from 'react-router-dom';
import MirapayLogo from '../../../shared/img/mirapaylogo.png'







const EmailUnverifiedPage = ({ handleSubmit, previousUrl }) => {
const [emailverificationRequestSent, setEmailVerificationRequestSent] = useState(false)
const [submitting, setSubmitting] = useState(false)
const {email} = useSelector(state=>state.user)
const {userEmailVerified} = useSelector(state=>state.user)
const dispatch = useDispatch()
let history = useHistory();
const location = useLocation();
console.log(previousUrl)


const pageReferer = location.state?.previousUrl || previousUrl


function stopTimerHandler(){
  setEmailVerificationRequestSent(prev=>!prev)
}


// Timer component
const Timer=({stopTimer})=>{
const [seconds, setSeconds ] =  useState(60);
React.useEffect(() => {
  seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
  if(seconds == 0){
    stopTimer()
  }
}, [seconds]);
return seconds
}

       
     
   




async function sendEmailVerificationHandler(userEmail){
  setSubmitting(true)
  const email = {
    "email": userEmail
  }
  const result = await sendEmailVerification(JSON.stringify(email))
  try {
    if(result.data.status){
      console.log(result.data.status)
      setEmailVerificationRequestSent(true)
      
      Swal.fire({
        title: "",
        text: result.data.detail,
        icon: "success",
        showConfirmButton: false,
        timer: 3000
      })
  
    }
    
  } catch (error) {
    console.log(error)
    Swal.fire({
      title: "",
      text: "An error occured",
      icon: "error",
      showConfirmButton: false,
      timer: 3000
    })

    
  }
  
}


  return (
    <div className={styles.container}>
      <img style={{
          height:"100%",
          width: "50%"
        }}
        src={MirapayLogo}/>
      <h3>Verify Your Email Address</h3>
      {emailverificationRequestSent? <img className={styles.img_style} src={emailgif} alt="email verification logo"/> 
      :
      <img className={styles.img_style} src={emailsvg} alt="email svg"/>}
      <p>{pageReferer === "signup" && "Welcome to the Mirapay Platform"} We sent an email to <b>{email}.</b> Please verify it’s you.</p>
   
      <p>Check your spam folder if you don’t see it.</p>
    
      <p>{pageReferer === "signup" ? "Still can’t find the email?": "Thanks for signing in, but you still need to verify your email address" }</p>
      <button disabled={emailverificationRequestSent} onClick={()=>{
        // startCountdown()
        sendEmailVerificationHandler(email)
      }} className={`${styles.btn_style} btn btn-primary account__btn account__btn--small`}>{
      emailverificationRequestSent ?
   <Timer stopTimer={stopTimerHandler}/>
  : "Resend Email"
}</button>
    </div>
    


  );
};


export default EmailUnverifiedPage
