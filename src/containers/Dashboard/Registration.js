import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(9),
    },
  },
  centerItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statImage: {
    height: '40vh',
    background: `url(${process.env.PUBLIC_URL + '/interlogo.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
    },
  }
}))


const RegistrationTab = ({

}) => {
  const classes = useStyles();
  return (
    <Container className={`${classes.root} ${classes.centerItems}`}>
      <Grid
        container
        justify='space-evenly'
        direction='column'
        alignItems='flex-start'
        style={{ height: '100%' }}
      >
        <Grid item container justify='center'>
          <Typography gutterBottom variant='h3' align='center' >
            ثبت‌نام در آزمون مرحله اول
          </Typography>
        </Grid>
        <Grid container item direction='row' justify='center' spacing={2}>
          <Grid item xs={12} sm={4} className={classes.statImage} />
          <Grid
            xs={12} sm={8}
            item
            container
            direction='column'
            justify='center'
            spacing={4}
          >
            <Grid item>
              <Typography variant='h5'>
                برای ثبت‌نام در مرحله‌ی اول، اطلاعات زیر را تکمیل کنید و سپس بر روی گزینه‌ی ادامه کلیک کنید.
              </Typography>
            </Grid>
            <Grid item container spacing={1} justify='center'>
              <Grid item xs={12} container spacing={1} justify='center'>
                <Grid item xs={6}>
                  <TextField placeholder='نام' variant='outlined' fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField placeholder='نام خانوادگی' variant='outlined' fullWidth />
                </Grid>
              </Grid>
              <Grid item xs={12} container spacing={1} justify='center'>
                <Grid item xs={6}>
                  <TextField placeholder='نام مدرسه' variant='outlined' fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField placeholder='پایه‌ی تحصیلی (که باید دراپ‌داون بشه)' variant='outlined' fullWidth />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container direction='row' justify='space-between'>
              <Grid item xs={9} spacing={1} container justify='center' alignItems='center'>
                <Typography>
                  [جای تیک] قوانین و مقررات (که صد البته نداریم!)‌ رو خوانده‌ام و رعایتشون می‌کنم.
                </Typography>
              </Grid>
              <Grid item xs={3} spacing={1} container justify='flex-end'>
                <Button variant='contained' color='primary' fullWidth >
                  ادامه...
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container >
  )
}

const mapStateToProps = (state, ownProps) => {

}

export default connect(
  mapStateToProps,
  {

  }
)(RegistrationTab);