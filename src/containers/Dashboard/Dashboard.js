import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
} from '@material-ui/core'
import {
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import Appbar from '../../components/Appbar/ResponsiveAppBar';
import RegistrationTab from './Registration';
import AnnouncementsTab from './Announcements';
import ProfileTab from './Profile';
import ButtonBar from './ButtonBar';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    width: '100wh',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    overflowX: 'hidden',
  }
}));

function Dashboard() {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  return (
    <Grid container direction='column' justify='space-between' alignItems='center' className={classes.container}>
      <div className='dashboard-background' />
      <Grid item container>
        {/* <RegistrationTab /> */}
      </Grid>
      <ButtonBar />
      {/* <Switch className={classes.switch}>
        <Route
          path={'/dashboard/registration'}
          component={RegistrationTab}
        />
        <Route
          path={'/dashboard/announcements'}
          component={AnnouncementsTab}
        />
        <Route
          path={'/dashboard/profile'}
          component={ProfileTab}
        />
        <Redirect to={'/dashboard/announcements'} />
      </Switch> */}
    </Grid>
  );
}

export default Dashboard;
