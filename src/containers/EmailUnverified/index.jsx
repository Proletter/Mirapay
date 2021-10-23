import React from 'react';
import Verifyemail from './components/EmailUnverified';
import styles from './EmailUnverified.module.css'

const EmailUnverifiedPage = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className={`${styles.container} account__card`}>
        {/* <div className="account__head">
          <h4 className="account__subhead subhead">Please verify your email address to continue</h4>
        </div> */}
        <Verifyemail/>
      </div>
    </div>
  </div>
);

export default EmailUnverifiedPage;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
