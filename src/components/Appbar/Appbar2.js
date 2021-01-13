import React from 'react';
import {
  Typography,
  Toolbar,
  CssBaseline,
  makeStyles,
  AppBar,
  IconButton,
} from '@material-ui/core';
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12
  },
  logo: {
    maxWidth: '50px',
    marginRight: '10px',
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img
            src={process.env.PUBLIC_URL + '/interlogo.png'}
            alt="logo"
            className={classes.logo}
          />
          <Typography variant="title" noWrap>
            اینترکارسولار
          </Typography>

          <section className={classes.rightToolbar}>
            <IconButton color="inherit" aria-label="Edit">
              <EditIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Save">
              <SaveIcon />
            </IconButton>
          </section>
        </Toolbar>
      </AppBar>
    </div>
  );
}
