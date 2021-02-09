import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
} from '@material-ui/core'
import {
  Switch,
  Redirect,
  Route,
  useLocation,
} from "react-router-dom";

import Appbar from '../../components/Appbar/ResponsiveAppBar';
import RegistrationTab from './Registration';
import AnnouncementsTab from './Announcements';
import ProfileTab from './Profile';
import ButtonBar from './ButtonBar';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  container: {
    overflowX: 'hidden',
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const location = useLocation();
  console.log(location)
  const urlParams = new URLSearchParams(location.search);
  const tabName = urlParams.get('tab');

  console.log(tabName);

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

  return (
    <Grid container direction='column' justify='space-between' alignItems='center' className={classes.container}>
      <Grid item container direction='row' alignItems='center'>
        {
          tab == 0 &&
          <AnnouncementsTab />
        }
        {
          tab == 1 &&
          <RegistrationTab />
        }
        {
          tab == 2 &&
          <ProfileTab />
        }
      </Grid>
      <Grid item container>
      </Grid>
      <ButtonBar className={classes.buttonBar} onClick={setTab} />
    </Grid>
  );
}

export default Dashboard;
