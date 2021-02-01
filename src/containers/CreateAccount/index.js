import React from 'react'
import {
  Hidden
} from '@material-ui/core';
import MobileLogin from './Mobile';
import DesktopLogin from './Desktop';

const Login = () => {
  return (
    <>
      <Hidden smUp>
        <MobileLogin />
      </Hidden>
      <Hidden xsDown>
        <DesktopLogin />
      </Hidden>
    </>
  )
}

export default Login;