import React from 'react';
import {
  Button,
} from '@material-ui/core'
import LogoButton from './components/LogoButton';

const LandingAppBarItems = () => {
  const home = (
    <Button>
      خانه
    </Button>
  )

  const spaceship = (
    <Button>
      سفینه‌ی من
    </Button>
  )

  return ({
    desktopLeftItems: [],
    desktopRightItems: [home, spaceship],
    mobileLeftItems: [home, spaceship],
    mobileRightItems: [],
    mobileMenuListItems: [],
  })
};

export default LandingAppBarItems;
