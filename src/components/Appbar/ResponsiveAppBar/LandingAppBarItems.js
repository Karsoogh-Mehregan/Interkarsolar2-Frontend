import React from 'react';
import {
  Button,
} from '@material-ui/core'
import LogoButton from './components/LogoButton';
import AppBarButton from './components/Button'
const LandingAppBarItems = () => {

  const enterToSpaceShipButton = < AppBarButton name = 'ورود به سفینه' / >

    return ({
      desktopLeftItems: [enterToSpaceShipButton, ],
      desktopRightItems: [],
      mobileLeftItems: [],
      mobileRightItems: [],
      mobileMenuListItems: [],
    })
};

export default LandingAppBarItems;