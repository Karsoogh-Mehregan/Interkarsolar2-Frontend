import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  statImage: {
    height: '40vh',
    background: `url(${process.env.PUBLIC_URL + '/logo.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  title: {
    fontSize: 60,
    color: '#fbebd1',
    textShadow: '-2px 2px #888',
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
    },
  },
  notificationTitle: {
    fontSize: 28,
    color: '#4d4a70',
  },
  paper: {
    padding: theme.spacing(3),
    backgroundColor: 'rgb(255, 255, 255, 0.94)',
  },
}));

const Announcement = ({ title, date, text, image, linkURL, linkText }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container textAlign="center" spacing={4} >
        <Grid item container justify='center' xs={12} sm={4} md={2} style={{ maxHeight: '20vh' }}>
          <img src={process.env.PUBLIC_URL + image} alt='' height='100%' />
        </Grid>
        <Grid item xs={12} sm={8} md={10} container direction='column' justify='space-evenly' spacing={1}>
          <Grid item container alignItems='flex-end' spacing={1}>
            <Grid item>
              <Typography variant="h3" className={classes.notificationTitle}>
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle" >
                {date}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              color="textSecondary">
              {text}
            </Typography>
            <Typography>
              <a href={linkURL} target="_blank" rel="noreferrer">
                {linkText}
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}


export default Announcement;