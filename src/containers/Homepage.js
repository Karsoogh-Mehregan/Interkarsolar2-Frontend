import React, { useState } from 'react';
import _ from 'lodash';
import {
  Button,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  Container,
} from '@material-ui/core';
import PersonCard from '../components/Cards/PersonCard'
import Timeline from '../components/TimeLine/TimeLine'
import { connect } from 'react-redux';
import ScrollTop from '../components/ScrollToTop/ScrollToTop';
import ResponsiveAppBar from '../components/Appbar/ResponsiveAppBar';
import { logout } from '../redux/actions/account';
import { Staff } from './Staff/StaticData';
import Supporter from '../components/Footer/Supporters'
import Footer from '../components/Footer/Footer';
import FAQ from '../components/FAQ';

const useStyles = makeStyles((theme) => ({
  centerItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 70,
    lineHeight: '80px',
    color: '#fbebd1',
    textShadow: '-2px 2px #888',
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
      lineHeight: '40px',
    },
  },

  subtitle: {
    fontSize: 30,
    // lineHeight: '40px',
    color: '#fcecd2',
    textShadow: '-1px 1px #888',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      // marginBottom: theme.spacing(3),
    },
  },

  sectionTitle: {
    fontSize: 26,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },

  text: {
    textAlign: 'justify',
    textJustify: 'inter-word',
  },

  teamWorkImage: {
    background: `url(${process.env.PUBLIC_URL + '/team-work.png'})`,
    backgroundSize: 'contain !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },

  section1: {
    height: '100vh',
    color: 'black',
  },

  section3: {
    color: '#f7f2f6',
    background: 'linear-gradient(90deg, rgba(64,113,149,1) 0%, rgba(39,70,142,1) 35%, rgba(36,33,97,1) 100%);',
    padding: theme.spacing(8),
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4),
      paddingTop: theme.spacing(3),
    },
  },

  section4: {
    opacity: '1',
    background: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
    color: '#26373d',
    padding: theme.spacing(8),
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4),
      paddingTop: theme.spacing(3),
    },
  },

  section5: {
    background: `url(${process.env.PUBLIC_URL + '/background3.jpg'})`,
    color: '#f7f2f6',
    padding: theme.spacing(8),
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4),
      paddingTop: theme.spacing(3),
    },
  },

  section6: {
    background: `linear-gradient(90deg, rgba(176,200,255,1) 0%, rgba(124,200,229,1) 51%, rgba(64,113,149,1) 100%);`,
    color: 'black',
    padding: theme.spacing(8),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(1),
    },
  },

  section7: {
    background: `linear-gradient(90deg, rgba(176,200,255,1) 0%, rgba(124,200,229,1) 51%, rgba(64,113,149,1) 100%);`,
    color: 'black',
    padding: theme.spacing(8),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },


  footer: {
    alignContent: 'center',
    color: '#a69eac',
  },

}));

function Homepage({ isLoggedIn }) {
  const classes = useStyles();

  return (
    <div style={{ margin: 0 }}>
      <Container className={classes.section1}>
        <div className="landing-background" />
        <div id="back-to-top-anchor"></div>
        <ResponsiveAppBar mode="LANDING" showBackOnScroll hideOnScroll={false} />

        <Grid container direction="row" style={{ height: '100%' }}>
          <Hidden xsDown>
            <Grid item container xs={12} sm={7} />
          </Hidden>
          <Grid
            item container
            xs={12} sm={5}
            justify="center"
            alignItems="center">
            <Grid item>
              <Typography
                component="h1"
                variant="h1"
                className={classes.title}>
                اینترکارسولار
                </Typography>
              <Typography
                component="h2"
                variant="h3"
                className={classes.subtitle}>
                دومین دوره رویداد برخطِ
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container className={`${classes.section3} ${classes.centerItems}`}>
        <Grid container direction="column" spacing={6}>
          <Grid item>
            <Typography
              component="h2"
              variant="h2"
              className={classes.sectionTitle}
              align='center'>
              اینجا چه خبره؟
            </Typography>
          </Grid>
          <Grid container item direction="row" justify='center'>
            <Grid container item direciton="column" xs={12} sm={6} spacing={2} alignItems='center'>
              <Grid item>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  یک سال پیش ما در تدارک مرحله دوم بیستمین کارسوق مهرگان بودیم که شب خوابیدیم و صبح پاشدیم دیدیم یه مهمون ناخونده به نام کرونا اومده و دیگه نمی‌گذاره که کارسوق رو به روال سابق برگزارکنیم و همدیگر رو ببینیم. ولی تیم مهرگان قوی‌تر از اینها بود که کم‌بیاره و از خیر دیدن شما کارسوقی‌های شیفته‌ی ریاضی بگذره. آخه طاقتش رو ‌نداشتیم!
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  خلاصه اینکه ما هم کارسوق رو آنلاین کردیم و چشم‌مون رو بستیم روی کرونا و با هم رفتیم سیاره‌ی اینترکارسولار تا اونجا جناب ریاضیِ دوست‌داشتنی‌مون رو ملاقات‌کنیم و از همنشینی باهاش لذت‌ببریم. امسال هم با سری دوم اینترکارسولار داریم میایم پیشتون تا با هم بریم و دومین سیاره‌ی اینترکارسولار رو در کهکشان مهرگان ببینیم ، حسابی با هم خوش‌بگذرونیم و با جناب ریاضی معاشرت‌کنیم و کلی مسئله حل‌کنیم...
                </Typography>
              </Grid>
            </Grid>
            <Hidden xsDown="true">
              <Grid item sm={6} className={classes.teamWorkImage}></Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Container>

      <Container className={`${classes.section4} ${classes.centerItems}`}>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Typography
              component="h2"
              variant="h2"
              align='center'>
              زمان‌بندی رویداد
            </Typography>
          </Grid>
          <Grid container item justify='center'>
            <Timeline />
          </Grid>
        </Grid>
      </Container>

      <Container className={`${classes.section7} ${classes.centerItems}`}>
        <Grid container direction="column" alignItems='center' spacing={4}>
          <Grid item>
            <Typography
              component="h2"
              variant="h2"
              align='center'>
              پرسش‌های متداول
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9} md={6} >
            <FAQ />
          </Grid>
        </Grid>
      </Container>

      <Container className={`${classes.section5} ${classes.centerItems}`}>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Typography
              component="h2"
              variant="h2"
              align='center'>
              تیم اینترکارسولار
            </Typography>
          </Grid>
          <Grid
            container item
            direction="row"
            spacing={4}
            justify='center'
            alignItems='center'
            className={classes.personCard}>
            {
              _.shuffle(Staff).slice(0, 4).map((staff) => {
                return (
                  <Grid container item xs={12} sm={6} md={3} justify='center'>
                    <PersonCard
                      name={staff.name}
                      position={staff.position}
                      description={staff.description}
                      image={staff.image} />
                  </Grid>
                )
              })
            }
          </Grid>
          <Grid container item justify="center" alignItems="center" >
            <Button
              variant="contained"
              color="default"
              size="medium"
              target="_blank"
              rel="noopener noreferrer"
              href="staff/">
              <Typography variant="h3">مشاهده همه</Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container className={`${classes.section6} ${classes.centerItems}`}>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Supporter />
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </Container>

      <ScrollTop showBelow={250} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.account.token,
});

export default connect(
  mapStateToProps,
  {
    logout
  }
)(Homepage);
