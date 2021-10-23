import React from 'react';
import Verifyemail from './components/EmailVerifiedPage';
import styles from './EmailVerifiedPage.module.css'

const EmailVerifiedPage = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className={`${styles.container} account__card`}>
        <Verifyemail/>
      </div>
    </div>
  </div>
);

export default EmailVerifiedPage;
