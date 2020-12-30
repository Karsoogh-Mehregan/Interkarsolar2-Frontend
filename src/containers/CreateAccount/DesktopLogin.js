import React from 'react'
import {
  Container,
  Grid,
  makeStyles,
  TextField,
  Button,
  Typography,
  Paper,
} from '@material-ui/core';
import { connect } from 'react-redux'


const useStyles = makeStyles((theme) => ({
  background: {
    height: '100vh',
    // backgroundColor: '#984fff', // TODO:
  },
  paper: {
    padding: theme.spacing(2),
  },
  statImage: {
    height: '100vh',
    background: `url(${process.env.PUBLIC_URL + '/interlogo.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
}))



const DesktopCreateAccount = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.background}>
        <Grid
          container
          className={classes.background}
          justify='center'
          alignItems='center'>
          <Grid
            container item
            justify='center'
            alignItems='center'
            xs={6}>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <Grid item container>
                  <Grid
                    container
                    item
                    direction='column'
                    justify='center'
                    spacing={2}>
                    <Grid item>
                      <Typography gutterBottom variant='h3' align='center'>
                        سفینه‌ت رو بساز و کارت رو آغاز کن!
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
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.statImage} />
        </Grid>
      </Container>
    </>
  )
}

export default connect(
  undefined,
  {

  }
)(DesktopCreateAccount);