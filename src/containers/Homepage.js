import {
  Button,
  Fab,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import Container from '@material-ui/core/Container';
import TelegramIcon from '@material-ui/icons/Telegram';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import VideocamIcon from '@material-ui/icons/Videocam';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';

import React, { useState } from 'react';
import PersonCard from '../components/Cards/PersonCard'
import Timeline from '../components/TimeLine/TimeLine'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthDialog from '../components/Dialog/AuthDialog/AuthDialog';
import ScrollTop from '../components/ScrollToTop/ScrollToTop';
import Navbar from '../components/Appbar/ResponsiveAppBar';
import { logout } from '../redux/actions/account';

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
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },

  section1: {
    height: '100vh',
    color: 'black',
    padding: theme.spacing(4, 3, 4),
  },

  section3: {
    color: '#f7f2f6',
    background: 'linear-gradient(90deg, rgba(64,113,149,1) 0%, rgba(39,70,142,1) 35%, rgba(36,33,97,1) 100%);',
    padding: theme.spacing(8),
    paddingTop: theme.spacing(4),
  },

  section4: {
    opacity: '1',
    background: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
    color: '#26373d',
    padding: theme.spacing(8),
    paddingTop: theme.spacing(4),
  },


  section5: {
    opacity: '1',

    background: `url(${process.env.PUBLIC_URL + '/background3.jpg'})`,
    color: '#f7f2f6',

    paddingTop: '30px',
    paddingBottom: '30px',
  },

  section6: {
    opacity: '1',
    background: '#F3A321',
    // color: '#f2f2f2',

    paddingTop: '30px',
    paddingBottom: '30px',
  },
  footer: {
    alignContent: 'center',
    color: '#a69eac',
  },
  formPaper: {
    padding: theme.spacing(2),
    boxShadow: '1px 1px 1px 1px black',
  },

  supportAnnouncement: {
    position: 'sticky',
    bottom: theme.spacing(1),
    left: theme.spacing(1),
  },
  end: {
    fontSize: 60,
    color: 'white',
    textShadow: '2px 2px #333',
    lineHeight: '60px',
  },
  survey: {
    background: '#689F38',
    color: 'white',
    '&:hover': {
      color: '#689F38',
    },
  },
}));

function Homepage({ isLoggedIn, logout }) {
  const classes = useStyles();
  const [authDialogOpen, setAuthDialogOpen] = useState();

  return (
    <>
      <Container className={classes.section1}>
        <div className="landing-background" />
        <div id="back-to-top-anchor"></div>
        <Navbar />

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
                دومین دوره رویداد برخط
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
          <Grid container item direction="row">
            <Grid container item direciton="column" xs={12} sm={6} spacing={2}>
              <Grid item xs={12}>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  یک سال پیش ما در تدارک مرحله دوم بیستمین کارسوق مهرگان بودیم که شب خوابیدیم و صبح پاشدیم دیدیم یه مهمون ناخونده به نام کرونا اومده و دیگه نمی‌گذاره که کارسوق رو به روال سابق برگزارکنیم و همدیگر رو ببینیم. ولی تیم مهرگان قوی‌تر از اینها بود که کم‌بیاره و از خیر دیدن شما کارسوقی‌های شیفته‌ی ریاضی بگذره. آخه طاقتش رو ‌نداشتیم!
                </Typography>
              </Grid>
              <Grid item xs={12}>
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
          <Grid item>
            <Timeline />
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
          <Grid container item direction="row" spacing={4} className={classes.personCard}>
            <Grid item xs={6} sm={3}>
              <PersonCard />
            </Grid>
            <Grid item xs={6} sm={3}>
              <PersonCard />
            </Grid>
            <Hidden xsDown="true">
              <Grid item xs={3}><PersonCard /></Grid>
            </Hidden>
            <Hidden xsDown="true">
              <Grid item xs={3}><PersonCard /></Grid>
            </Hidden>
          </Grid>
          <Grid container xs={12} justify="center"
            alignItems="center" >
            <Button
              variant="contained"
              color="default"
              size="medium"
              href="staff/">
              <Typography variant="h3">مشاهده همه </Typography>
            </Button>
          </Grid>
          <Grid container direction="column" justify="center" className={classes.footer}>
            <Typography
              component="h5"
              variant="h5">
              ما را در شبکه‌های زیر دنبال کنید
            </Typography>
            <Grid item direction="row">
              <Grid container justify="center">

                <Button href="https://www.instagram.com/karsooghmehregan/" color="default">
                  <InstagramIcon />
                </Button>
                <Button href="https://t.me/karsooghmehregan_20">
                  <TelegramIcon />
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Container>

      <ScrollTop showBelow={250} />
      <AuthDialog
        open={authDialogOpen}
        handleClose={() => setAuthDialogOpen(false)}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.account.token,
});

export default connect(mapStateToProps, { logout })(Homepage);
