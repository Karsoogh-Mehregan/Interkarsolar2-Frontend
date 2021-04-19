import React, { useState, useEffect } from 'react';
import Announcement from '../../components/Cards/Notification';
import {
  Container,
  Grid,
  Typography,
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
  announcements: {
    height: '55vh',
    borderRadius: '5px',
    backgroundColor: 'rgba(76, 173, 211, 70%)',
    overflowY: 'scroll',
    margin: 15,
    boxShadow: '-5px 5px 20px #62b1d1',
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
          className={`${classes.announcements} announcements`}
          item container
          justify='center'
          alignItems='center'
          spacing={2}>

          <Grid item xs={12}>
            <Announcement title='اعلام نتایج' date='۳۱ فروردین ۱۴۰۰' image='announcement.jpg' text='بالاخره نتایج مرحله‌ی اول اعلام شد! می‌تونید به صفحه‌ی «آزمون‌ها» برید و اونجا نتیجه‌تون رو ببینید :) راستی، اگه قبول شده بودید یادتون نره که حتماً توی آزمون مرحله دوم ثبت‌نام کنید.' />
          </Grid>

          <Grid item xs={12}>
            <Announcement title='نظرسنجی' date='۲۳ اسفند ۹۹' image='survey.png' text='قطعا در برگزاری مرحله اول مشکلاتی داشتیم که بابتش ازتون عذرخواهی می‌کنیم. لطفاً شما هم با پرکردن نظرسنجی زیر به ما برای ادامه‌ی بهتر اینترکارسولار کمک کنید!' linkURL='https://formaloo.com/interkarsolar' linkText='لینک نظرسنجی' />
          </Grid>

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
