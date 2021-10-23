import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import MirapayLogo from '../../../shared/img/mirapaylogo.png'

const Topbar = ({ changeMobileSidebarVisibility, changeSidebarVisibility }) => (
  <div className="topbar">
    <div className="topbar__wrapper">
      <div className="topbar__left">
        <TopbarSidebarButton
          changeMobileSidebarVisibility={changeMobileSidebarVisibility}
          changeSidebarVisibility={changeSidebarVisibility}
        />
        {/* <Link className="topbar__logo" to="/pages" /> */}
       <img
        style={{
          height:"100%",
          width: "5em",
        }}
        src={MirapayLogo}
       />
      </div>
      <div className="topbar__right">
        <TopbarProfile />
      </div>
    </div>
  </div>
);

Topbar.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};

export default Topbar;
