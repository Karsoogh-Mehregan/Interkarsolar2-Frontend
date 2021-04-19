import React from 'react';
import LoginButton from './components/LoginButton';
import TypicalButton from './components/Button';
import CreateAccountButton from './components/CreateAccountButton'


const LandingAppBarItems = () => {

  return ({
    desktopLeftItems: [<LoginButton />, <CreateAccountButton />],
    desktopRightItems: [],
    mobileLeftItems: [<LoginButton />, <CreateAccountButton />],
    mobileRightItems: [],
    mobileMenuListItems: [],
  })
};

export default LandingAppBarItems;