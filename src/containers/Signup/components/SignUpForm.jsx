import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import styles from './signUpForm.module.css'
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon'
import { useSelector, useDispatch } from 'react-redux'
import { setUserName, setSignedInState } from '../../../redux/features/user/userSlice'
import {signUpUser} from '../../../utils/apiHandlers/signUp'
import Spinner from 'react-spinner-material'
import { useHistory } from "react-router-dom";
import { setUserEmail } from '../../../redux/features/user/userSlice';
import Swal from 'sweetalert2'
import axios from 'axios'




const SignUpForm = () => {
  const dispatch = useDispatch()
  const {isSignedIn} = useSelector(({user}) => user)
  let history = useHistory()
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false)
  const {userEmailVerified} = useSelector(state => state.user)

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  console.log(isSignedIn)

  
  async function signUp(data, setSubmitting){
    try {
      const details = await signUpUser(JSON.stringify(data))
      const username = data.account_name || "user"
       dispatch(setUserName(username))
       dispatch(setUserEmail(data.email))
      if(details.status >= 500){
        Swal.fire(
          {
            title: "",
            text: details.data.detail,
            icon: "error",
            showConfirmButton: false,
            timer: 3000
          }
        )
        setSubmitting(false)
        return

      }
      if(!details.data.status && details.data.email[0].includes('already')){
        Swal.fire(
          {
            title: "",
            text: details.data.email[0],
            icon: "error",
            showConfirmButton: false,
            timer: 3000
          }
        )
        setUserAlreadyExists(true)
        setSubmitting(false)
      }
      if(details.data.status){
        dispatch(setSignedInState(true))
        history.push({
          pathname: '/verifyemail',
          state: {  
            previousUrl: "signup", 
          },
        });
      }

      // if(details.data.status && userEmailVerified){
      //   history.push('/pages')
      // }
    } catch (error) 
    {
      console.log(error)
      
      Swal.fire({
        title: "",
        text: "An error occured. Please try again later",
        icon: "error",
        showConfirmButton: false,
        timer: 3000
      });
      setSubmitting(false)
    }
    
    
  }



return <>  <Formik
  initialValues={{ account_name: "", password: "",email: "" }}
  onSubmit={(values, { setSubmitting }) => {
console.log("value in form", values)
    // dispatch(setUserCredentials(values))
    setSubmitting(true);

    setTimeout(() => {
      signUp(values, setSubmitting)
    }, 500);
  }}

  validationSchema={Yup.object().shape({
  account_name:Yup.string()
  .required("No account name provided.")
  .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed as account name ")
  .min(4, "account name should be a minimum of 4 characters"),
  
    email: Yup.string()
      .email()
      .required("No email provided")
      ,
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number.")
      .matches(/^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,'Password must contain at least one special character')
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
        <span className="form__form-group-label">Account Name</span>
        <div className={`form__form-group-field ${errors.account_name && touched.account_name && "form__form-validation"}`}>
          <div className="form__form-group-icon">
            <AccountOutlineIcon />
          </div>
          <input
            name="account_name"
            component="input"
            type="text"
            placeholder="Account name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.account_name}
          />
        </div><p>
        {errors.account_name && touched.account_name && errors.account_name}
        </p>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Email</span>
        <div className={`form__form-group-field ${errors.email &&  "form__form-validation"}`}>
          <div className="form__form-group-icon">
          <AlternateEmailIcon/>
          </div>
          <input
            name="email"
            component="input"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </div>
        <p>
        {errors.email && touched.account_name && errors.email}
        </p>
      </div>
      <div className={`form__form-group`}>
        <span className="form__form-group-label">Password</span>
        <div className={`form__form-group-field ${errors.password &&  "form__form-validation"}`}>
          <div className="form__form-group-icon">
            <KeyVariantIcon />
          </div>
          <input
            name="password"
            component="input"
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
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary account__btn account__btn--small" >
      {isSubmitting ?
      <div className={styles.button_elem}>
       <Spinner  radius={20} color={"#333"} stroke={2} visible={true} />
        </div>
        : "Sign Up"
      }
      </button>
      <div className={styles.bottom_text}>
      Already have an account? <span><Link to="/signin"> sign in</Link></span>
      </div>
     
    </form>
     
     
    );
  }}
</Formik>
     </>
};

// SignUpForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

export default SignUpForm