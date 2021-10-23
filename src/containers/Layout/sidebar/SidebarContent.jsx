import React from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

const SidebarContent = ({ onClick, changeToDark, changeToLight }) => {
  const handleHideSidebar = () => {
    onClick();
  };

  return (
    <div className="sidebar__content">
      <SidebarCategory title="Layout" icon="layers">
        <button type="button" className="sidebar__link" onClick={changeToLight}>
          <p className="sidebar__link-title">Light Theme</p>
          </button>
          <button type="button" className="sidebar__link" onClick={changeToDark}>
            <p className="sidebar__link-title">Dark Theme</p>
            </button>
            </SidebarCategory>
      <ul className="sidebar__block">
        <SidebarLink title="Transaction" icon="exit" route="/pages/transaction" onClick={handleHideSidebar} />
        <SidebarLink title="Customers" icon="exit" route="/pages/customers" onClick={handleHideSidebar} />
        <SidebarLink title="Balance" icon="exit" route="/pages/balance" onClick={handleHideSidebar} />
        <SidebarLink title="Disputes" icon="exit" route="/pages/disputes" onClick={handleHideSidebar} />
        <SidebarLink title="Subaccounts" icon="exit" route="/pages/subaccounts" onClick={handleHideSidebar} />
        <SidebarLink title="Switch to Live Mode" icon="exit" route="/pages/switchtolivemode" onClick={handleHideSidebar} />
        <SidebarLink title="Settngs" icon="exit" route="/pages/settings" onClick={handleHideSidebar} />
        </ul>
    </div>
  );
};

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SidebarContent;
