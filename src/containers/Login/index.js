import React from 'react'
import {
  Hidden
} from '@material-ui/core';
import MobileLogin from './MobileLogin';
import DesktopLogin from './DesktopLogin';

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