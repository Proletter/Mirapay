import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AccountSelectionPage.module.css'
import { useSelector} from 'react-redux';
import AccountSelectionProfile from './AccountSelectionProfile';





const AccountSelectionPage = ({ handleSubmit }) => {
const {userAccounts} = useSelector(state=>state.user)
return userAccounts.map(item=><AccountSelectionProfile name={item.name} accountnumber={item.account_number} token={item.live_pk}/>)
};


export default AccountSelectionPage
