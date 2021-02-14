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

const AnnouncementsTab = ({ status, isRegistrationCompleted, didPaymentFail }) => {
  const classes = useStyles();

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
          {didPaymentFail &&
            < Grid item xs={12}>
              <Announcement title='ای بابا!' date='' image='png' text='به نظر می‌رسه که پرداختت با خطا روبه‌رو شده. اگه پول از حسابت کم شده ولی ثبت‌نامت نهایی نشده، به کارسوق‌ادمین توی بله، اینستاگرام یا تلگرام پیام بده تا پیگیری کنیم :)' />
            </Grid>
          }
          {isRegistrationCompleted &&
            <Grid item xs={12}>
              <Announcement title='ثبت‌نامت تکمیله!' date='' image='greenCheck.png' text='ایول! ثبت‌نامت با موفقیت انجام شده و حالا باید منتظر مرحله اول بمونی. ۸ اسفند شروع مرحله یکه!' />
            </Grid>
          }
          <Grid item xs={12}>
            <Announcement title='آغاز ثبت‌نام مرحله یک' date='۲۵بهمن۹۹' image='announcement.jpg' text='بله! بعد از یک سال دوری از شما سیارک‌داران گرامی، دوباره با دوره‌ی دوم رویداد اینترکارسولار در خدمت شما هستیم! ثبت‌نام اینترکارسولار از امروز شروع شده و تا اول اسفند ادامه داره. بدو جا نمونی... ' />
          </Grid>
          {!isRegistrationCompleted &&
            <Grid item xs={12}>
              <Announcement title='هنوز ثبت‌نامت نهایی نشده!' date='' image='redX.png' text='سیارک‌دار گرامی توجه کن! ثبت‌نامت هنوز نهایی نشده. برای نهایی‌کردن ثبت‌نام باید به بخش «ثبت‌نام نهایی» بری.' />
            </Grid>
          }
        </Grid>
      </Grid>
    </Container >
  );
};

const mapStateToProps = (state, ownProps) => ({
  status: state.account.info
    ? state.account.info.status
    : 0,
  isFetching: state.account.isFetching,
  isRegistrationCompleted: ownProps.isRegistrationCompleted,
  didPaymentFail: ownProps.didPaymentFail,
})

export default connect(mapStateToProps, {})(AnnouncementsTab);
