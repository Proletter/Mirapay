import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon'
import { Formik } from 'formik';
import * as Yup from "yup";
import styles from './loginForm.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setUserCredentials } from '../../../redux/features/signin/signinSlice'
import {signInUser} from '../../../utils/apiHandlers/signIn'
import { useHistory } from "react-router-dom";
import Spinner from 'react-spinner-material'
import { setUserEmailVerification } from '../../../redux/features/user/userSlice';
import { setUserAccounts } from '../../../redux/features/user/userSlice';
import { setUserEmail } from '../../../redux/features/user/userSlice';
import { setUserPassword } from '../../../redux/features/user/userSlice';
import saveToLocal  from '../../../utils/storageService/storageService'
import Swal from 'sweetalert2'

const LogInForm = ({ handleSubmit,signedin }) => {
  const dispatch = useDispatch()
  let history = useHistory();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const {userEmailVerified} = useSelector(state => state.user)



  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  
  async function signUser(data, setSubmitting){
    try {
      const res = await signInUser(JSON.stringify(data))
      console.log(res)
      console.log("signin status", res.data)
      

  
      if(!res.data.status && res.data.detail.includes("Invalid credentials")){
        Swal.fire({
          title: "",
          text: res.data.detail,
          icon: "error",
          showConfirmButton: false,
          timer: 3000
          
        });
        setSubmitting(false)
      }

      
      if(res.status === 403 && res.data.detail.includes("verify")){
        dispatch(setUserEmail(data.email))
        dispatch(setUserEmailVerification(false))      
        // history.push('/verifyemail')
        history.push({
          pathname: '/verifyemail',
          state: { 
            previousUrl: "signin", 
          },
        });
        
      }
      
      if(res.status >= 500){
        Swal.fire({
          title: "",
          text: "A server error occured",
          icon: "error",
          showConfirmButton: false,
          timer: 3000
        });
        setSubmitting(false)
      }

      if(res.data.status && res.data.detail.includes('Login successful')){
        dispatch(setUserEmailVerification(true))
        // const liveToken = res.data.data.live_token
        // const testToken = res.data.data.test_token
        // saveToLocal('liveToken', liveToken);
        // saveToLocal('testToken', testToken)

        // No need for a swal notification when login is successful

        // Swal.fire({
        //   title: "",
        //   text: res.data.detail,
        //   icon: "success",
        //   showConfirmButton: false,
        //   timer: 2000
        // });
        history.push('/pages')
      }
      
      if(res.data.status && res.data.detail.includes('Choose')){
        dispatch(setUserEmailVerification(true))
        dispatch(setUserAccounts(res.data.data.accounts))
        // const liveToken = res.data.data.live_token
        // const testToken = res.data.data.test_token
        // saveToLocal('liveToken', liveToken);
        // saveToLocal('testToken', testToken)

        // No need for a swal notification when login is successful

        // Swal.fire({
        //   title: "",
        //   text: res.data.detail,
        //   icon: "success",
        //   showConfirmButton: false,
        //   timer: 2000
        // });
        history.push('/selectaccount')
      }
      
    } catch (error) {
        console.log(error)
        // Alert the user if an error occurs that doesn't have to do with api response
        Swal.fire({
            title: "",
            text: "Something went wrong, please try again later",
            icon: "error",
            showConfirmButton: false,
            timer: 3000
          });
      setSubmitting(false)
      
    }
   
   
  }



  return <Formik
    initialValues={{ email: "", password: ""}}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(true)

     
        signUser(values, setSubmitting)
        dispatch(setUserCredentials(values))
        dispatch(setUserEmail(values.email))
        dispatch(setUserPassword(values.password))
      
    }}
  
    validationSchema={Yup.object().shape({
    email: Yup.string()
    .required("Please provide your email")
    .email()
    ,
    password: Yup.string()
        .required("Please input your password.")
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
        <span className="form__form-group-label">Email</span>
        <div className={`form__form-group-field ${errors.email && "form__form-validation"}`}>
          <div className="form__form-group-icon">
          <AlternateEmailIcon/>
          </div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          
        </div>
        <p>
        {touched.email && errors.email && errors.email}
        </p>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Password</span>
        <div className={`form__form-group-field ${errors.password && "form__form-validation"}`}>
          <div className="form__form-group-icon">
            <KeyVariantIcon />
          </div>
          <input
            name="password"
            type={isPasswordShown ? 'text' : 'password'}
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <button
            className={`form__form-group-button${isPasswordShown ? ' active' : ''}`}
            onClick={() => showPassword()}
            type="button"
          ><EyeIcon />
          </button>
        </div>
        <p>
        {errors.password && touched.password && errors.password}
        </p>
        <div className="account__forgot-password">
          <a href="/resetpassword">Forgot a password?</a>
        </div>
      </div>
      <div className="form__form-group">
        <div className="form__form-group-field">
          <input
          className="form__form-checkbox"
            name="remember_me"
            type="checkbox"
            label="Remember me"
          />
        </div>
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary account__btn account__btn--small" >
      {isSubmitting ?
      <div className={styles.button_elem}>
       <Spinner  radius={20} color={"#333"} stroke={2} visible={true} />
        </div>
        : "Sign In"
      }
      </button>
      <Link className="btn btn-outline-primary account__btn account__btn--small" to="/signup">Create Account</Link>
    </form>)}}
     
    </Formik>
     }

{/* LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}; */}

export default LogInForm
