import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom'
import AvatarComponent from './components/Avatar';
import DashboardButton from './components/DashboardButton';
import LogoButton from './components/LogoButton';
import LogoutButton from './components/LogoutButton';
import Info from './components/Info';


const DashboardItems = () => {

  let { gameId } = useParams();

  const logoButton = <LogoButton />;
  const score = <Info />;
  const myProblemsButton = <DashboardButton name={'مسئله‌های من'} to={`/game/${gameId}/my_problems`} />;
  const logoutButton = <LogoutButton />;
  const Avatar = <AvatarComponent />;

  return {
    desktopLeftItems: [Avatar, logoutButton],
    desktopRightItems: [myProblemsButton, score],
    mobileLeftItems: [score],
    mobileRightItems: [],
    mobileMenuListItems: [myProblemsButton, logoutButton],
  };
};

export default DashboardItems;
