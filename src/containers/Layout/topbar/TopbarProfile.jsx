import React, { useState } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';
import { useSelector} from 'react-redux'


const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

const TopbarProfile = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const {username} = useSelector(state => state.user)

  console.log(username)
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  

  return (
    <div className="topbar__profile">
      <button type="button" className="topbar__avatar" onClick={setIsCollapsed}>
        <img className="topbar__avatar-img" src={Ava} alt="avatar" />
        <p className="topbar__avatar-name">{username}</p>
        <DownIcon className="topbar__icon" />
      </button>
      {isCollapsed && (
        <button
          type="button"
          aria-label="button collapse"
          className="topbar__back"
          onClick={handleToggleCollapse}
        />
      )}
      <Collapse isOpen={isCollapsed} className="topbar__menu-wrap">
        <div className="topbar__menu">
          <TopbarMenuLink title="transactions" icon="list" path="/pages/transactions" />
          <TopbarMenuLink title="customers" icon="inbox" path="/pages/customers" />
          <div className="topbar__menu-divider" />
          <TopbarMenuLink title="Log Out" icon="exit" path="/" />
        </div>
      </Collapse>
    </div>
  );
};

export default TopbarProfile;
