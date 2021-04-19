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
import { Close as CloseIcon } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  image: (props) => ({
    background: `url(${process.env.PUBLIC_URL}/Staff/${props.image})`,
    backgroundSize: 'cover !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    boxShadow: '2px 2px 5px gray',
    height: 'inherit',
  }),
  description: {
    padding: '10px',
    align: 'left',
    textAlign: 'justify',
  }
}));

function MentorIntroduction({
  open,
  handleClose,
  name,
  post,
  image,
  description,
}) {
  const classes = useStyles({ image });

  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
      <Grid
        style={{ height: '300px' }}
        container
        direction='row'
        justify='center'
        alignItems='center'>
        <Grid xs={12} sm={6} container item direction='column' style={{ height: '100%' }} justify='center'>
          <Grid item>
            <Typography gutterBottom component="h3" variant="h4" align="center">
              {name}
            </Typography>
          </Grid >
          <Grid item>
            <Typography component="h4" variant="h6" className={classes.description}>
              {description}
            </Typography>
          </Grid>
        </Grid>
        <Hidden xsDown="true">
          <Grid sm={6} item className={classes.image}></Grid>
        </Hidden>
      </Grid>
    </Dialog >
  );
}


export default MentorIntroduction;