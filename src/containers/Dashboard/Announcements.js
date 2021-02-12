import React, { useState, useEffect } from 'react';
import Announcement from '../../components/Cards/Notification';
import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PushButton from '../../components/Fancy/PushButton'

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
    backgroundColor: '#d1d1d1',
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
}));

const AnnouncementsTab = ({ }) => {
  const classes = useStyles();
  const [isRegistered, setRegistrationStatus] = useState(false);

  return (
    <Container style={{ overflow: 'hidden' }}>
      <div className={`dashboard-background blur`} />
      <Grid
        className={classes.root}
        container
        justify='center'
        alignItems='center'
        spacing={4}
      >
        <Grid item container justify='center'>
          <Typography variant='h2' className={classes.title} >
            اطلاعیه‌ها
          </Typography>
        </Grid>
        <Grid
          xs={12} sm={8}
          item container
          justify='center'
          alignItems='center'
          spacing={2}
        >
          <Grid item xs={12}>
            <Announcement title='آغاز ثبت‌نام مرحله یک' date='۲۵بهمن۹۹' text='بله! بعد از یک سال دوری از شما سیارک‌داران گرامی، دوباره با دوره‌ی دوم رویداد اینترکارسولار در خدمت شما هستیم! ثبت‌نام اینترکارسولار از امروز شروع شده و تا اول اسفند ادامه داره. بدو جا نمونی... ' />
          </Grid>
          {!isRegistered &&
            <Grid item xs={12}>
              <Announcement title='هنوز ثبت‌نامت نهایی نشده!' date='' image='redX.png' text='سیارک‌دار گرامی توجه کن! ثبت‌نامت هنوز نهایی نشده. برای نهایی‌کردن ثبت‌نام باید به بخش «ثبت‌نام» بری.' />
            </Grid>
          }
          {isRegistered &&
            <Grid item xs={12}>
              <Announcement title='ثبت‌نامت تکمیله!' date='' image='greenCheck.png' text='ایول! ثبت‌نامت با موفقیت انجام شده و حالا باید منتظر مرحله اول بمونی. ۸ اسفند شروع مرحله یکه!' />
            </Grid>
          }
        </Grid>
      </Grid>
    </Container >
  );
};

const mapStateToProps = (state, ownProps) => { };

export default connect(mapStateToProps, {})(AnnouncementsTab);
