import React from 'react';
import LoginButton from './components/LoginButton';
import TypicalButton from './components/Button';
import CreateAccountButton from './components/CreateAccountButton'


const LandingAppBarItems = () => {

  const sampleQuestions = <TypicalButton name='نمونه سوالات سال‌های قبل' target="_blank"
    rel="noopener noreferrer" to='http://karsooghmehregan.ir/%d9%86%d9%85%d9%88%d9%86%d9%87-%d8%b3%d9%88%d8%a7%d9%84%d8%a7%d8%aa-%d8%b3%d8%a7%d9%84-%d9%87%d8%a7%db%8c-%d9%82%d8%a8%d9%84' />

  return ({
    desktopLeftItems: [<LoginButton />, <CreateAccountButton />],
    desktopRightItems: [],
    mobileLeftItems: [<LoginButton />, <CreateAccountButton />],
    mobileRightItems: [],
    mobileMenuListItems: [],
  })
};

export default LandingAppBarItems;