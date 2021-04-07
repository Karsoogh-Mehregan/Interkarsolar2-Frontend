import React from 'react';

import AvatarComponent from './components/Avatar';
import DashboardButton from './components/DashboardButton';
import LogoButton from './components/LogoButton';
import LogoutButton from './components/LogoutButton';
import Info from './components/Info';

const DashboardItems = () => {
  const logoButton = <LogoButton />;
  const score = <Info />;
  const myProblemsButton = <DashboardButton name={'سوالات من'} to={'/formula0/my_problems'} />;
  const auctionButton = <DashboardButton name={'مزایده'} to={'/formula0/auction'} />;

  const logoutButton = <LogoutButton />;
  const Avatar = <AvatarComponent />;

  return {
    desktopLeftItems: [score, logoutButton],
    desktopRightItems: [Avatar, myProblemsButton, auctionButton,],
    mobileLeftItems: [score, Avatar],
    mobileRightItems: [],
    mobileMenuListItems: [myProblemsButton, auctionButton, logoutButton],
  };
};

export default DashboardItems;
