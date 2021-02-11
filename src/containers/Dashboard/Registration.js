import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  TextField,
  Button,
  Checkbox,
} from '@material-ui/core';
import { connect } from 'react-redux';

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
    textShadow: '-1px 1px #888',
    textAlign: 'center',
    fontWeight: 'bold',
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


const RegistrationTab = ({ }) => {
  const classes = useStyles();
  const [isAllowed, setIsAllowed] = useState(true);

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
        <Grid item container justify='center'>
          <Typography variant='h2' className={classes.title} >
            ثبت‌نام نهایی
          </Typography>
        </Grid>
        <Grid container item direction='row' justify='center' spacing={2}>
          <Grid item xs={12} sm={6} className={classes.statImage} />
          <Grid
            xs={12} sm={5}
            item
            container
            direction='column'
            justify='center'
            alignItems='center'
            spacing={4}
          >
            <Grid item container justify='center'>
              <Typography variant='h3' className={classes.header3} align='center'>
                {isAllowed
                  ? 'ایول! اطلاعاتت تکمیله و می‌تونی ثبت‌نامت رو نهایی کنی...'
                  : 'انگار هنوز اطلاعاتت ناقصه! به بخش «مشخصات من» برو و مشخصاتت رو کامل کن، بعد می‌تونی ثبت‌نامت رو نهایی کنی.'
                }
              </Typography>
            </Grid>
            {isAllowed &&
              <>
                <Grid item container direction='row' spacing={4} justify='space-around'>
                  <Grid item xs={1}>
                    <Checkbox />
                  </Grid>
                  <Grid item xs={10} spacing={1} container justify='center' alignItems='center'>
                    <Typography className={classes.normalText}>
                      اگر در سال گذشته در مرحله‌ی اول کارسوق ریاضی مهرگان ثبت‌نام کرده بودی، این مورد را تیک بزن.
                </Typography>
                  </Grid>
                </Grid>
                <Grid item container justify='center'>
                  <Button variant='contained' color='primary' size='large'>
                    ادامه...
                  </Button>
                </Grid>
              </>
            }
          </Grid>
          <Grid item xs={12} sm={1} />
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