import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom'
import AvatarComponent from './components/Avatar';
import DashboardButton from './components/DashboardButton';
import LogoButton from './components/LogoButton';
import LogoutButton from './components/LogoutButton';
import Info from './components/Info';

const DashboardItems = () => {
  const logoButton = <LogoButton />;
  // const score = <Info />;
  const myProblemsButton = <DashboardButton name={'سوالات من'} to={'/formula0/my_problems'} />;
  const auctionButton = <DashboardButton name={'مزایده'} to={'/formula0/auction'} />;

  const logoutButton = <LogoutButton />;
  const Avatar = <AvatarComponent />;

  return {
    desktopLeftItems: [Avatar, logoutButton],
    desktopRightItems: [myProblemsButton, auctionButton,],
    mobileLeftItems: [],
    mobileRightItems: [],
    mobileMenuListItems: [myProblemsButton, auctionButton, logoutButton],
  };
};

export default DashboardItems;
