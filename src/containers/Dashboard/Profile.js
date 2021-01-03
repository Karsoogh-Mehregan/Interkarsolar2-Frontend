import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    height: '100vh',
  },
  centerItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statImage: {
    height: '50vh',
    background: `url(${process.env.PUBLIC_URL + '/interlogo.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
}))


const ProfileTab = ({

}) => {
  const classes = useStyles();
  return (
    <Container className={`${classes.centerItems} ${classes.root}`}>
      <Grid container direction='column' justify='space-evenly' style={{ height: '100%' }}>
        <Grid item>
          <Typography gutterBottom variant='h3' align='center'>
            ویرایش اطلاعات
          </Typography>
        </Grid>
        <Grid item>
          <form>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
              spacing={2}>
              <Grid item container spacing={1} justify='center'>
                <Grid item>
                  <TextField placeholder='نام' variant='outlined'>
                  </TextField>
                </Grid>
                <Grid item>
                  <TextField placeholder='نام خانوادگی' variant='outlined'>
                  </TextField>
                </Grid>
              </Grid>
              <Grid item container spacing={1} justify='center'>
                <Grid item>
                  <TextField placeholder='نام مدرسه' variant='outlined'>
                  </TextField>
                </Grid>
                <Grid item>
                  <TextField placeholder='پایه‌ی تحصیلی' variant='outlined'>
                  </TextField>
                </Grid>
              </Grid>
              <Grid item container spacing={1} justify='center'>
                <Grid item>
                  <TextField placeholder='نام کاربری' variant='outlined'>
                  </TextField>
                </Grid>
                <Grid item>
                  <TextField placeholder='شماره تلفن' variant='outlined'>
                  </TextField>
                </Grid>
              </Grid>
              <Grid container item direction='row' justify='center'>
                <Button variant='contained' color='primary' >
                  ذخیره
            </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {

}

export default connect(
  mapStateToProps,
  {

  }
)(ProfileTab);