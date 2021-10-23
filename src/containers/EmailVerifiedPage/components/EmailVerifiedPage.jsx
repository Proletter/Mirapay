import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './EmailVerifiedPage.module.css'
import { verifyEmail } from '../../../utils/apiHandlers/verifyEmail';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-spinner-material'
import Swal from 'sweetalert2'
import emailverifiedpostive from '../../../shared/img/emailverifiedpositive.svg'
import {Link, useParams, useHistory} from 'react-router-dom'
import { setUserEmailVerification } from '../../../redux/features/user/userSlice';





const EmailUnverifiedPage = ({ handleSubmit }) => {
const [submitting, setSubmitting] = useState(false)
const {email} = useSelector(state=>state.user)
const {userEmailVerified} = useSelector(state=>state.user)
const [tokenValid, setTokenValid] = useState(true)
const dispatch = useDispatch()
let history = useHistory();

const {subroute, token} = useParams()
// if(!subroute && !token){
//   history.push('/verifyemail')
 
// }

useEffect(() => {
  async function verifyUserEmail() {
    try {
      const response = await verifyEmail(`${subroute}/${token}`)
      if(response.data.status){
        dispatch(setUserEmailVerification(true))
        Swal.fire({
          title: 'Email Verified',
          text: "",
          icon: "success",
          showConfirmButton: false,
          timer: 3000
        }
        )
      }else{
        Swal.fire(
          {
            title: 'An Error Occured',
            text: 'Invalid token. Please make another email verification request',
            icon: "error",
            showConfirmButton: false,
            timer: 3000
          }
          )
        setTokenValid(false)
      }
      
    } catch (error) {
      Swal.fire(
        {
          title: 'An Error Occured',
          icon: "error",
          showConfirmButton: false,
          timer: 3000
        }
        
      )
      console.log(error)
    }
  
  }
 verifyUserEmail()
}, [])


  return (
    tokenValid ?(
    userEmailVerified ?
    <div className={styles.container}>
      <h1>Email Verified</h1>
      <img className={styles.img_style_positive} src={emailverifiedpostive}/>
      <p>Thank you for verifying your email</p>
      <Link to="/signin" className={`${styles.button_verfied} btn btn-primary account__btn account__btn--small`}>Sign In</Link>
    </div>
   
  :"Verifying Email..."
  )
    :
    <div className={styles.container}>

      <h2>Invalid token</h2>
      <p>Please make another email verification request</p>
      <Link to="/verifyemail" className={`${styles.button_verfied} btn btn-primary account__btn account__btn--small`}>Go to Request Page</Link>
    </div>
    

  );
};


export default EmailUnverifiedPage
