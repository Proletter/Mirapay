import React from 'react';
import AccountSelection from './components/AccountSelectionPage';
import styles from './AccountSelectionPage.module.css'
import MirapayLogo from "../../shared/img/mirapaylogo.png"

const AccountSelectionPage = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className={`${styles.container} account__card`}>
        <center>
        <img style={{
          height:"100%",
          width: "50%"
        }} src={MirapayLogo}/>
        </center>
        <h4 className={styles.container_text}>CHOOSE AN ACCOUNT</h4>
        <AccountSelection/>
      </div>
    </div>
  </div>
);

export default AccountSelectionPage;
