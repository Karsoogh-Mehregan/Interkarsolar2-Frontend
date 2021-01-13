import React from 'react';
import {
  Button,
} from '@material-ui/core'
import LogoButton from './components/LogoButton';
import AppBarButton from './components/Button'
const LandingAppBarItems = () => {


  return ({
    desktopLeftItems: [<AppBarButton name='خروج' />],
    desktopRightItems: [<AppBarButton name='سفینه‌ی من' />, <AppBarButton name='خانه' />],
    mobileLeftItems: [],
    mobileRightItems: [],
    mobileMenuListItems: [],
  })
};

export default LandingAppBarItems;
