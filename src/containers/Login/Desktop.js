import React from 'react'
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Paper,
} from '@material-ui/core';
import InputFields from './InputFields';


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
                        برای ورود به سفینه‌ات آماده‌ای؟
                      </Typography>
                    </Grid>
                    <InputFields />
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

export default (DesktopCreateAccount);