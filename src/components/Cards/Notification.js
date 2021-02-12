import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Paper
} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    fontSize: '1rem',
    textDecoration: 'none',
    overflow: 'hidden',
    boxShadow: '0 0 2rem -1rem rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.1s ease-in-out',
  },
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
  header3: {
    fontSize: 25,
    lineHeight: '30px',
    textShadow: '-1px 1px #888',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fbebd1',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container textAlign="center" spacing={2} >
        <Grid item container justify='center' xs={5} sm={3} md={2} style={{ maxHeight: '20vh' }}>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt='' height='100%' />
        </Grid>
        <Grid item xs={7} sm={9} md={10} container direction='column' justify='space-evenly' >
          <Grid item container alignItems='flex-start'>
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                title
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2">
                date
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ textAlign: 'center' }}>
              متن اطلاعیه
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </Paper>
  );
}
