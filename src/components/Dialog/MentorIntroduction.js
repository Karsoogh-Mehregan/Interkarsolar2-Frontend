import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  TextField,
  Typography,
  Paper,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { Close as CloseIcon } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  rightImage: {
    background: `url(${process.env.PUBLIC_URL + '/Seyyed_Alireza_Hashemi.jpeg'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    boxShadow: '2px 2px 5px gray',
    height: 'inherit',
  },

  dialogue: {
    height: 300,
  },

  leftGrid: {
    height: '100%',
  },

  buttonProgress: {
    color: green[500],
  },
  notStarted: {
    margin: theme.spacing(3),
  },
}));

function MentorIntroduction({
  open,
  handleClose,
}) {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
      <Grid
        style={{ height: '300px' }}
        container
        direction='row'
        justify='center'
        alignItems='center'>
        <Grid container item direction='column' style={{ height: '100%' }} justify='center' xs={6}>
          <Grid item>
            <Typography gutterBottom component="h3" variant="h4" align="center">
              سید علیرضا هاشمی
            </Typography>
          </Grid >
          <Grid item style={{ padding: '10px' }}>
            <Typography component="h4" variant="h6" align="left" style={{ textAlign: 'justify' }}>
              او ۲۱ ساله‌ست! ترم پنجم کارشناسی‌ست و در دانشگاه کامپیوتر می‌خواند. از بچگی با شام و ناهارهای کارسوق بزرگ شده و حتی گفته می‌شود اضافه وزن اخیر او ناشی از اثرات آن شام‌ها و ناهارهاست.
          </Typography>
          </Grid>
        </Grid>
        <Hidden xsDown="true">
          <Grid sm={6} item className={classes.rightImage}></Grid>
        </Hidden>
      </Grid>
    </Dialog >
  );
}


export default MentorIntroduction;