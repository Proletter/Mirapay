import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './PasswordResetPage.module.css'
import { resetPassword } from '../../../utils/apiHandlers/resetPasswordConfirmation';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-spinner-material'
import {useParams, useHistory} from 'react-router-dom'
import { setUserPasswordReset } from '../../../redux/features/user/userSlice';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import { Formik } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2'



const PasswordResetPage = () => {
const dispatch = useDispatch()
const [isPasswordShown1, setIsPasswordShown1] = useState(false)
const [isPasswordShown2, setIsPasswordShown2] = useState(false)

const {email} = useSelector(state=>state.user)
const {userPasswordReset} = useSelector(state=>state.user)
const [userConfirmResetRequestPage, setUserConfirmResetPasswordPage] = useState(false)
let history = useHistory();

const {subroute, token} = useParams()

console.log(subroute,token)

  function showPassword1(){
    setIsPasswordShown1(prev=> !prev)
  }
  function showPassword2(){
    setIsPasswordShown2(prev=> !prev)
  }



  async function resetUserPasswordHandler(values,setSubmitting) {
    const payload={
      'uid': subroute,
      'token':token,
      'password': values.password
    
    }
    try {
      const response = await resetPassword(JSON.stringify(payload))
      console.log(response)
      if(response.data.status){
        console.log(response)
        Swal.fire(
          {
            title: 'Password Reset Successful',
            text: 'Please sign in with your updated email and password',
            icon: "success",
            showConfirmButton: false,
            timer: 3000
          }
        )
        
          dispatch(setUserPasswordReset(true))
          setSubmitting(false)
          history.push('/signin')
   
        
        
      }
      
    } catch (error) {
      console.log(error?.response?.data?.status)
      Swal.fire(
        {
          title: 'password reset failed',
          text: 'please make another password request {button to request screen}',
          icon: "error",
          showConfirmButton: false,
          timer: 3000
        }
      )
      setSubmitting(false)
      // console.log("error in catch block")
    }
  
  }
 

  return(
    <Formik
    initialValues={{ password: "", confirmPassword: ""}}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(true)
        resetUserPasswordHandler(values,setSubmitting)
  
    
    }}
  
    validationSchema={Yup.object().shape({
    password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number.")
    .matches(/^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,'Password must contain at least one special character')
    ,
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })}
  >
     {props => {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    } = props;
    return (
   <form className="form" onSubmit={handleSubmit}>
         <div className="form__form-group">
        <span className="form__form-group-label">Enter New Password</span>
        <div className={`form__form-group-field ${errors.password && "form__form-validation"}`}>
          <div className="form__form-group-icon">
            <KeyVariantIcon />
          </div>
          <input
            name="password"
            type={isPasswordShown1 ? 'text' : 'password'}
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <button
            className={`form__form-group-button${isPasswordShown1 ? ' active' : ''}`}
            onClick={() => showPassword1()}
            type="button"
          ><EyeIcon />
          </button>
        </div>
        {errors.password && touched.password && errors.password}
        
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Confirm Password</span>
        <div className={`form__form-group-field ${errors.confirmPassword && "form__form-validation"}`}>
          <div className="form__form-group-icon">
            <KeyVariantIcon />
          </div>
          <input
            name="confirmPassword"
            type={isPasswordShown2 ? 'text' : 'password'}
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          <button
            className={`form__form-group-button${isPasswordShown2 ? ' active' : ''}`}
            onClick={() => showPassword2()}
            type="button"
          ><EyeIcon />
          </button>
        </div>
        {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
        
      </div>
      
      <button type="submit" disabled={isSubmitting} className="btn btn-primary account__btn account__btn--small" >
      {isSubmitting ?
      <div className={styles.button_elem}>
       <Spinner  radius={20} color={"#333"} stroke={2} visible={true} />
        </div>
        : "Submit"
      }
      </button>
    </form>)}}
     
    </Formik>)
};


export default PasswordResetPage
