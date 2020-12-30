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
    width: '50vw',
    height: '50vh',
    background: `url(${process.env.PUBLIC_URL + '/interlogo.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
}))



const DesktopLogin = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.background}>
        <Grid
          container
          className={classes.background}
          alignContent='center'
          alignItems='center'>
          <Grid item>
            <Paper className={classes.paper}>
              <Grid
                container
                direction='row'
                spacing={2}>
                <Grid xs={6} item container>
                  <Grid
                    container
                    item
                    direction='column'
                    justify='center'
                    spacing={2}>
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
                </Grid>
                <Grid item xs={6} className={classes.statImage} />
              </Grid>
            </Paper>
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
)(DesktopLogin);