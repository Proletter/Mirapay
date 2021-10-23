import React from 'react';
import SignUpForm from './components/SignUpForm';

const SignUp = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">Welcome to
            <span className="account__logo"> Mira
              <span className="account__logo-accent">pay</span>
            </span>
          </h3>
          <h4 className="account__subhead subhead">Create your account</h4>
        </div>
        <SignUpForm onSubmit />
      </div>
    </div>
  </div>
);

export default SignUp;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
