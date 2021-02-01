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
import InputFields from './InputFields';

const useStyles = makeStyles((theme) => ({
  background: {
    height: '100vh',
    // backgroundColor: '#984fff', // TODO:
  },
  statImage: {
    height: '50vh',
    background: `url(${process.env.PUBLIC_URL + '/logo.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
}))

const MobileCreateAccount = () => {
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
              سفینه‌ات رو بساز و آماده‌ی پرتاب شو!
            </Typography>
          </Grid>
          <InputFields />
        </Grid>
      </Container>
    </>
  )
}

export default connect(
  undefined,
  {

  }
)(MobileCreateAccount);