import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
} from '@material-ui/core'
import {
  Redirect,
  useLocation,
} from "react-router-dom";
import {
  getUserInfo,
  updateUserInfo,
} from '../../redux/actions/account'
import { connect } from 'react-redux';

import ResponsiveAppBar from '../../components/Appbar/ResponsiveAppBar';
import RegistrationTab from './Registration';
import AnnouncementsTab from './Announcements';
import ProfileTab from './Profile';
import ButtonBar from './ButtonBar';

const useStyles = makeStyles((theme) => ({
  container: {
    overflowX: 'hidden',
    [theme.breakpoints.only('sm')]: {
      minHeight: '110vh',
    },
  },
}));

function Dashboard({
  getUserInfo,
  info,
}) {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [isAllowed, setIsAllowed] = useState(false);
  const [isRegistrationCompleted, setRegistrationStatus] = useState(false);

  useEffect(
    () => {
      if (info) {

        console.log(info)

        if (info.status === 20 || info.status === 10) {
          setRegistrationStatus(true);
        } else {
          setRegistrationStatus(false);
        }

        const { first_name, last_name, national_code, phone1, phone2, grade, city, school_name } = info;
        if (first_name && last_name && national_code && phone1 && phone2 && grade && city && school_name) {
          setIsAllowed(true);
        } else {
          setIsAllowed(false);
        }
      }
    }
    , [info])

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const tabName = urlParams.get('tab');

  useEffect(
    () => {
      if (tabName == 'announcements') {
        setTab(0);
      } else if (tabName == 'registration') {
        setTab(1);
      } else if (tabName == 'profile') {
        setTab(2);
      } else {
        return (
          <Redirect to={'/dashboard?tab=announcements'} />
        )
      }
    }
    , [useLocation])

  useEffect(
    () => {
      getUserInfo();
    }
    , [getUserInfo])

  return (
    <Grid container direction='column' justify='space-between' alignItems='center' className={classes.container}>
      <Grid item container direction='row' alignItems='center'>
        {
          tab == 0 &&
          <AnnouncementsTab isRegistrationCompleted={isRegistrationCompleted} />
        }
        {
          tab == 1 &&
          <RegistrationTab isAllowed={isAllowed} isRegistrationCompleted={isRegistrationCompleted} />
        }
        {
          tab == 2 &&
          <ProfileTab isRegistrationCompleted={isRegistrationCompleted} />
        }
      </Grid>
      <Grid item container>
      </Grid>
      <ButtonBar className={classes.buttonBar} onClick={setTab} />
    </Grid>
  );
}

const mapStateToProps = (state, ownProps) => ({
  info: state.account.info,
  isFetching: state.account.isFetching,
})

export default connect(
  mapStateToProps,
  {
    getUserInfo,
  }
)(Dashboard);
