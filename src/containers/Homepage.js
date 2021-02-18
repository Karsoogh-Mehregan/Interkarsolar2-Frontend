import React, { useState } from 'react';
import _ from 'lodash';
import {
  Button,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  Container,
} from '@material-ui/core';
import { connect } from 'react-redux'

import CoronaTest from '../components/MiniGames/Corona'

function Homepage({ isLoggedIn }) {

  return (
    <CoronaTest />
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.account.token,
});

export default connect(
  mapStateToProps,
  {
  }
)(Homepage);
