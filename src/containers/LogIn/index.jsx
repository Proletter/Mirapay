import React from 'react';
import LogInForm from './components/LogInForm';

const Signin = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">Welcome to
            <span className="account__logo"> Mira
              <span className="account__logo-accent">pay</span>
            </span>
          </h3>
          <h4 className="account__subhead subhead">Sign in to dashboard</h4>
        </div>
        <LogInForm onSubmit />
      </div>
    </div>
  </div>
);

export default Signin;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
