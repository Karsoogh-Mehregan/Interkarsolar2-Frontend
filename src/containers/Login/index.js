import React from 'react'
import {
  Hidden
} from '@material-ui/core';
import MobileLogin from './Mobile';
import DesktopLogin from './Desktop';
import { connect } from 'react-redux';
import {
  Redirect,
} from "react-router-dom";

const Login = ({ token }) => {

  if (token) {
    return (
      <Redirect to='/dashboard' />
    )
  }

  return (
    <>
      <div className='login-background' />
      <Hidden smUp>
        <MobileLogin />
      </Hidden>
      <Hidden xsDown>
        <DesktopLogin />
      </Hidden>
    </>
  )
}

const mapStateToProps = (state) => ({
  token: state.account.token,
})

export default connect(
  mapStateToProps,
  {

  }
)(Login);