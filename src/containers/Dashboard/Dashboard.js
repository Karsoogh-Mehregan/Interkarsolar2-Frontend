import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { makeStyles } from '@material-ui/core/styles';
import {
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import RegistrationTab from './Registration';
import AnnouncementsTab from './Announcements';
import ProfileTab from './Profile';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1000,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  logo: {
    height: 45
  },
}));

const drawer = (
  <div>
    <List>
      <ListItem button component='a' href='/dashboard/announcements' key={'announcements'}>
        <ListItemIcon>
          <NotificationsActiveRoundedIcon />
        </ListItemIcon>
        اطلاعیه‌ها
      </ListItem>
      <ListItem button component='a' href='/dashboard/registration' key={'registration'}>
        <ListItemIcon>
          <AssignmentRoundedIcon />
        </ListItemIcon>
        ثبت‌نام
      </ListItem>
      <ListItem button component='a' href='/dashboard/profile' key={'profile'}>
        <ListItemIcon>
          <PersonRoundedIcon />
        </ListItemIcon>
        ویرایش اطلاعات
      </ListItem>
    </List>
  </div>
);

function Dashboard() {

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />


      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <img
            src={process.env.PUBLIC_URL + '/interlogo.png'}
            alt="logo"
            className={classes.logo}
          />
          <Typography variant="h6" noWrap>
            اینترکارسولار
          </Typography>
          <Grid></Grid>
        </Toolbar>
      </AppBar>


      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}>
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}>
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}>
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>


      <Switch>
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
      </Switch>
    </div>
  );
}

export default Dashboard;
