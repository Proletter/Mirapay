import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import styles from './signUpForm.module.css'
import AccountBalanceWallet from 'mdi-react/AccountBalanceWalletIcon';
import AccountBalance from 'mdi-react/AccountBalanceIcon';
import Public from 'mdi-react/PublicIcon'
import AttachMoney from 'mdi-react/AttachMoneyIcon'
import { useSelector, useDispatch } from 'react-redux'
// import { setUserName, setSignedInState } from '../../../redux/features/user/userSlice'
// import {signUpUser} from '../../../utils/apiHandlers/signUp'
import Spinner from 'react-spinner-material'
import { useHistory } from "react-router-dom";
// import { setUserEmail } from '../../../redux/features/user/userSlice';
import Swal from 'sweetalert2'
import axios from 'axios'




const SignUpForm = () => {
  // const dispatch = useDispatch()
  // const {isSignedIn} = useSelector(({user}) => user)
  // let history = useHistory()

  //theme hack for custom select styles
  const {className} = useSelector(state => state.theme)
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  // const [userAlreadyExists, setUserAlreadyExists] = useState(false)
  // const {userEmailVerified} = useSelector(state => state.user)

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };




return <>  <Formik
  initialValues={{ account_name: "", password: "",email: "" }}
  onSubmit={(values, { setSubmitting }) => {
console.log("value in form", values)
    // dispatch(setUserCredentials(values))
    setSubmitting(true);

    setTimeout(() => {
      // signUp(values, setSubmitting)
    }, 500);
  }}

  validationSchema={Yup.object().shape({
  country:Yup.string()
  .required("No account name provided.")
  .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed as account name ")
  .min(4, "account name should be a minimum of 4 characters"),
  
    currency: Yup.string()
      .email()
      .required("No email provided")
      ,
    bank_name: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number.")
      .matches(/^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,'Password must contain at least one special character')
      ,
    bank_Account_number: Yup.string()
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
 
      <form style={{
        height: "10%"
      }}className="form" onSubmit={handleSubmit}>
      <div className="form__form-group">
              <span className="form__form-group-label">Country</span>
              <div className={styles.select_form_custom_container}>
              <div className={`form__form-group-icon ${styles.select_form_custom_icon}`}>
                  <Public />
               </div>
                  <select
                  className={className == "theme-light" ? styles.select_form_custom_light : styles.select_form_custom_dark}
                   name="coutry"
                   component="select"
                   type="select"
                    placeholder="Country"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.country}
                  >
                    <option value="" label="Select a country" />
                    <option value="red" label="red" />
                    <option value="blue" label="blue" />
                    <option value="green" label="green" />
                  </select>
                  <p>
                     {errors.country && touched.country && errors.country}
                 </p>
              </div>
            </div>
      <div className="form__form-group">
              <span className="form__form-group-label">Currency</span>
              <div className={styles.select_form_custom_container}>
              <div className={`form__form-group-icon ${styles.select_form_custom_icon}`}>
                  <AttachMoney />
               </div>
                  <select
                  className={className == "theme-light" ? styles.select_form_custom_light : styles.select_form_custom_dark}
                   name="currency"
                   component="select"
                   type="select"
                   placeholder="Currency"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.currency}
                  >
                    <option value="" label="Select a currency" />
                    <option value="red" label="red" />
                    <option value="blue" label="blue" />
                    <option value="green" label="green" />
                  </select>
                  <p>
                     {errors.currency && touched.currency && errors.currency}
                 </p>
              </div>
            </div>

      <div className={`form__form-group`}>
        <span className="form__form-group-label">Bank Name</span>
        <div className={`form__form-group-field ${errors.bank_name &&  "form__form-validation"}`}>
          <div className="form__form-group-icon">
          <AccountBalance />
          </div>
          <input
            name="bank_name"
            component="input"
            placeholder="Bank Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.bank_name}
          />
        </div>
        <p>
        {errors.bank_name && touched.bank_name && errors.bank_name}
        </p>
      </div>
      <div className={`form__form-group`}>
        <span className="form__form-group-label">Bank Account Number</span>
        <div className={`form__form-group-field ${errors.bank_account_number &&  "form__form-validation"}`}>
          <div className="form__form-group-icon">
            <AccountBalanceWallet/>
          </div>
          <input
            name="bank_account_number"
            component="input"
            placeholder="Account Number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.bank_account_number}
          />
        </div>
        <p>
        {errors.bank_account_number && touched.bank_account_number && errors.bank_account_number}
        </p>
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary account__btn account__btn--small" >
      {isSubmitting ?
      <div className={styles.button_elem}>
       <Spinner  radius={20} color={"#333"} stroke={2} visible={true} />
        </div>
        : "Create Account"
      }
      </button>
     
     
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