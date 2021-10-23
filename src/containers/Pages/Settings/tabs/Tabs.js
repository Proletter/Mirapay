import React, { useState } from 'react';
import {
  Nav, NavItem, NavLink, TabContent, TabPane, CardBody
} from 'reactstrap';
import classnames from 'classnames';
import ListAccounts from '../components/ListAccount';
import styles from '../components/ListAccount.module.css'
import ButtonIcon from '../../../../shared/img/Vector.svg'
import Modal from '../components/ModalCreateAccount/Modal';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="tabs__wrap">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => toggle('1')}
          >
            General
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => toggle('2')}
          >
            Payout Account
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => toggle('3')}
          >
            Users
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => toggle('4')}
          >
            Accounts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => toggle('5')}
          >
            Account Settings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '6' })}
            onClick={() => toggle('6')}
          >
            API
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
            use tolerably dependent listening men. Nandsome together unlocked do by. Article
            concern joy anxious did picture sir her. Although desirous not recurred disposed off shy you
            numerous securing.
          </p>
        </TabPane>
        <TabPane tabId="2">
          <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
            use tolerably dependeo peculiar in handsome together unlocked do by.
          </p>
        </TabPane>
        <TabPane tabId="3">
          <p>Direction has strangers now believing. gay far exposed parlors towards. Enjoyment
            use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
          </p>
        </TabPane>
        <TabPane tabId="4">
          <div>
          

            <div className={styles.Account_buttons}>
                <div className={styles.button_newaccount}>
                    <Modal
              color="primary"
              title="Congratulations!"
              colored
              message="Expect warmly its tended garden him esteem had remove off. Effects dearest staying
               now sixteen nor improve."
            />
                    
                    
                </div>
            </div>
        
              <ListAccounts/>
          </div>
        </TabPane>
        <TabPane tabId="5">
          <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
            use tolerably dependent listening 
          </p>
        </TabPane>
        <TabPane tabId="6">
          <p>Direction has strangers now
          </p>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;
