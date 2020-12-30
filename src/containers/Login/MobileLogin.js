import React from 'react'
import {
  Container,
  Grid,
  makeStyles,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  background: {
    height: '100vh',
    // backgroundColor: '#984fff', // TODO:
  },
  statImage: {
    height: '50vh',
    background: `url(${process.env.PUBLIC_URL + '/interlogo.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
}))

const MobileLogin = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.background}>
        <Grid
          container
          direction='column'
          justify='space-evenly'
          alignItems='stretch'
          spacing={2}>
          <Grid item className={classes.statImage}>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant='h3' align='center'>
              برای ورود به سفینه‌ی فضایی آماده‌ای؟
            </Typography>
          </Grid>
          <Grid item>
            <TextField placeholder='نام کاربری' variant='outlined' fullWidth>
            </TextField>
          </Grid>
          <Grid item>
            <TextField placeholder='رمز عبور' variant='outlined' fullWidth>
            </TextField>
          </Grid>
          <Grid container item direction='row' justify='center'>
            <Grid item>
              <Button variant='contained' color='primary'>
                بزن بریم
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default connect(
  undefined,
  {

  }
)(MobileLogin);