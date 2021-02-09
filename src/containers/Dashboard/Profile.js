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
    minHeight: '90vh',
    width: '100wh',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
    textAlign: 'center',
    fontWeight: 'bold',
    textJustify: 'inter-character',
    color: '#fbebd1',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  normalText: {
    textAlign: 'justify',
    color: '#fbebd1',
  }
}))


const ProfileTab = ({

}) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={`dashboard-background blur`} />
      <Grid
        className={classes.root}
        container
        justify='space-evenly'
        direction='column'
        alignItems='center'
      >
        <Grid item>
          <Typography gutterBottom variant='h3' align='center'>
            ویرایش اطلاعات
          </Typography>
        </Grid>
        <Grid item>
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
                <TextField placeholder='پایه‌ی تحصیلی (که باید دراپ‌داون بشه)' variant='outlined'>
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
              <Button size='large' variant='contained' color='primary'>
                ذخیره
                </Button>
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
)(ProfileTab);