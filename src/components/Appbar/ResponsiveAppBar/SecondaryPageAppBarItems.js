import React from 'react';
import TypicalButton from './components/Button'

const SecondaryPageAppBarItems = () => {

  const home = <TypicalButton name='بازگشت به صفحه‌ی اصلی' to='/' />

  return ({
    desktopLeftItems: [home],
    desktopRightItems: [],
    mobileLeftItems: [home],
    mobileRightItems: [],
    mobileMenuListItems: [],
  })
};

export default SecondaryPageAppBarItems;