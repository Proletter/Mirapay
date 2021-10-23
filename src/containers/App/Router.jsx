import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';
import LogIn from '../LogIn/index';
import Signup from '../Signup/index'
import Transaction from '../Pages/Transaction/index';
import Customers from '../Pages/Customers/index';
import Balance from '../Pages/Balance';
import Disputes from '../Pages/Disputes';
import SubAccounts from '../Pages/Subaccounts';
import SwitchToLiveMode from '../Pages/SwitchtoLiveMode';
import Settings from '../Pages/Settings';
import ResetPassword from '../ResetPassword';
import NotFound from '../DefaultPage/404/index'
import EmailUnverified from '../EmailUnverified'
import EmailVerifiedPage from '../EmailVerifiedPage'
import PasswordResetPage from '../PasswordResetPage'
import AccountSelectionPage from '../AccountSelectionPage'


const Pages = () => (
  <Switch>
    <Route path="/pages/transaction" component={Transaction} />
    <Route path="/pages/customers" component={Customers} />
    <Route path="/pages/balance" component={Balance} />
    <Route path="/pages/disputes" component={Disputes} />
    <Route path="/pages/subaccounts" component={SubAccounts} />
    <Route path="/pages/switchtolivemode" component={SwitchToLiveMode} />
    <Route path="/pages/settings" component={Settings} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>     
        <Route path="/verifyemail/:subroute/:token" component={EmailVerifiedPage} />
        <Route path="/resetpassword/:subroute/:token" component={PasswordResetPage} />
        <Route exact path="/verifyemail" component={EmailUnverified}/>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/" component={LogIn} />
        <Route exact path="/signin" component={LogIn} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/resetpassword" component={ResetPassword}/>
        <Route exact path="/selectaccount" component={AccountSelectionPage}/>       
        <Route path="/pages" component={wrappedRoutes} />
        <Route component={NotFound} />        
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
