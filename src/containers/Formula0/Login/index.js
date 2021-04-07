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

const Login = ({ team_id }) => {

  if (team_id) {
    return (
      <Redirect to='/formula0/my_problems' />
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
  team_id: state.formula0.team_id,
})

export default connect(
  mapStateToProps,
  {}
)(Login);