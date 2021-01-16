import {
  Button,
  Divider,
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
import Gallery from '../components/Gallery/gallery';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthDialog from '../components/Dialog/AuthDialog/AuthDialog';
import ScrollTop from '../components/ScrollToTop/ScrollToTop';
import { logout } from '../redux/actions/account';

import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';
import PersonCard from '../components/Cards/PersonCard'
import Timeline from '../components/TimeLine/TimeLine';
import AppBar from '../components/Appbar/ResponsiveAppBar'

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
    textShadow: '-2px 2px #888',
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
    paddingLeft: '20px',
  },

  divider: {
    boxShadow: '0px 1px 0px 1px #37253F',
    marginTop: '3vh',
    marginBottom: '3vh',
  },

  statImage: {
    background: `url(${process.env.PUBLIC_URL + '/stat.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
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

  // section1Grid: {
  //   height: '50vh',
  // },

  fullHeight: {
    height: '100%',
  },

  section2: {
    opacity: '1',
    color: '#f7f2f6',
    background: '#410066',
    paddingTop: '30px',
    paddingBottom: '30px',
  },

  section3: {
    opacity: '1',
    color: '#f7f2f6',
    background: '#673CC6',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  section4headline: {
    marginBottom: '30px',
  },
  section4button: {
    margin: '20px',
    marginBottom: '80px',
  },
  section4: {
    opacity: '1',
    background: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
    color: '#26373d',

    paddingTop: '30px',
    paddingBottom: '30px',
  },
  gallery: {
    opacity: '1',
    background: '#31046e',
    color: '#26373d',

    paddingTop: '30px',
    paddingBottom: '30px',
  },
  grid1: {
    background: '#240453',
    alignItems: 'center',
  },
  grid2: {
    alignContent: 'center',
    background: '#31046e',
  },
  gridtext: {
    alignContent: 'center',
    textAlign: 'justify',
    textJustify: 'inter-word',
    color: '#fffefa',
  },
  section4t: {
    opacity: '1',

    background: `url(${process.env.PUBLIC_URL + '/background3.jpg'})`,
    color: '#f7f2f6',

    paddingTop: '30px',
    paddingBottom: '30px',
  },

  section5: {
    opacity: '1',
    background: '#F0DBED',
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
      <div id="back-to-top-anchor" />
      <div className="landing-background" />
      <AppBar />

      <Container className={classes.section1}>
        <Grid container direction="row" style={{ height: '100%' }}>
          <Grid item container xs={12} sm={7} />
          <Grid
            item container
            xs={12} sm={5}
            justify="center"
            alignItems="center"
            direction="column"
            spacing={5}
          >
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
                دومین دوره مسابقات
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container className={`${classes.section3} ${classes.centerItems}`}>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Typography
              component="h2"
              variant="h2"
              className={classes.sectionTitle}>
              چرا کارسوق؟
            </Typography>
          </Grid>
          <Grid container item direction="row">
            <Grid container item direciton="column" xs={12} sm={6} spacing={2}>
              <Grid item xs={12}>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  A-لیمپیاد با هدف افزایش قدرت تفکر، یادگیری تکنیک‌های مدل‌سازی
                  ریاضی، کارگروهی، تمرین نوشتن یافته‌های علمی و جمع‌بندی و ارائه
                  مطالب در هلند و تعدادی دیگر از کشورها برگزار می‌شود. «حل
                  مسئله» و «مدل‌سازی ریاضی» در محتوای درسی بسیاری از کشورها
                  آورده شده است. تمرین این مهارت‌ها معمولا به ندرت انجام می‌شود
                  زیرا کتاب‌هایی با مثال‌های خوب از مسایل مناسب کم‌تر یافت
                  می‌شوند و نیز معلمان برای تدریس این دروس مشکلات زیادی دارند،
                  A-لیمپیاد تلاش می‌کند بستری برای پرورش و ارتقاء این مهارت‌ها
                  ایجاد نماید.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  دانش‌آموزان در این مسابقه برای حل یک مسئله در زندگی واقعی تلاش
                  می‌کنند و در حقیقت مساله به کمک تکنیک‌های مختلف و فرضیات خود
                  دانش‌آموزان حل می‌شود. دانش‌آموزان بایستی صورت دقیق مسئله را
                  تفسیر کنند، استراتژی مناسبی برای حل بیابند، نتایج به دست آورده
                  را تحلیل کنند و نتایج نهایی را ارائه نمایند. نتیجه نهایی این
                  مسابقه گزارشی نوشته شده است که بایستی به روشنی فرضیات،
                  تحلیل‌ها و جمع‌بندی دانش‌آموزان را نشان دهد.
                </Typography>
              </Grid>
            </Grid>
            <Hidden xsDown="true">
              <Grid item sm={1} />
              <Grid item sm={5} className={classes.statImage}></Grid>
            </Hidden>
          </Grid>
          <Divider variant="middle" className={classes.divider} />
          <Grid container item direction="row">
            <Hidden xsDown="true">
              <Grid item sm={5} className={classes.teamWorkImage}></Grid>
              <Grid item sm={1} />
            </Hidden>
            <Grid container item direciton="column" xs={12} sm={6} spacing={2}>
              <Grid item xs={12}>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  این آزمون در بیش از ۹۰ مدرسه در هلند و حدود ۱۷ کشور در دنیا با
                  محوریت موسسه فرودنتال، زیرمجموعه دانشگاه اترخت هلند در حال
                  برگزاری است و در پی پیمان همکاری این موسسه با خانه ریاضیات
                  اصفهان، این آزمون از سال ۱۳۸۶ تا کنون در ایران برگزار می‌گردد.
                  این آزمون ویژگی‌های خاصی دارد:{' '}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  <li>آزمون به صورت گروهی انجام می‌شود.</li>
                </Typography>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  <li>
                    تیپ سوالات، عموما مسایل واقعی از هر جایی نظیر سازمان‌ها،
                    شرکت‌ها، مراکز پژوهشی و یا مشکلات عمومی یک جامعه است و
                    معمولا این سوال واقعا در جایی مطرح شده است.
                  </li>
                </Typography>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  <li>
                    عموما برای ارایه حل برای مساله، یک مدل ریاضی ارائه می‌شود و
                    با یک ایده خاص روی آن بحث می‌شود.
                  </li>
                </Typography>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  <li>
                    ایده‌های ارایه شده می‌توانند بسیار متنوع باشند و ممکن است هر
                    کدام مشکلاتی داشته باشند و هیچ‌کدام مساله را ۱۰۰ درصد حل
                    نکنند.
                  </li>
                </Typography>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  <li>
                    عموما صورت مساله‌ها طولانی هستند و فرض‌های زیادی دارند و
                    ممکن است یک حل برای یک مساله، از همه فرض‌ها استفاده نکند.
                  </li>
                </Typography>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  <li>
                    حل مساله‌ها نیز کوتاه نیست و عموما بحث‌های تحلیلی نیاز دارد
                    که از این باب، مهارت نوشتن -چه از نظر مهارت چیدمان مطالب و
                    چه از نظر نحوه استدلال- بسیار اهمیت داده می‌شود.{' '}
                  </li>
                </Typography>
                <Typography
                  component="h3"
                  variant="h5"
                  className={classes.text}>
                  <li>
                    بعضی از مسایل صرفا مهارت خواندن موثر فرض‌های مساله و سپس
                    هم‌گردانی، استنتاج و تحلیل آن‌ها و ارایه یک خروجی تحلیل شده
                    را خواسته است.
                  </li>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.gallery}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={3} className={classes.grid1}>
            <Button>
              <Grid container direction="column">
                <Grid container justify="center">
                  <LibraryBooksIcon style={{ fontSize: 110, color: 'white' }} />
                  <Typography
                    component="h2"
                    variant="h3"
                    className={classes.gridtext}>
                    نمونه سوالات کارسوق
                </Typography>
                </Grid>

              </Grid>
            </Button>

          </Grid>
          <Grid item xs={12} sm={3} className={classes.grid2}>

            <Button>
              <Grid container direction="column">
                <Grid container justify="center">

                  <WallpaperIcon style={{ height: '100%', width: '100%', color: 'white' }} />
                  <Typography
                    component="h2"
                    variant="h3"
                    className={classes.gridtext}>
                    گالری تصاویر
                </Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>

          <Grid item xs={12} sm={3} className={classes.grid1}>
            <Button>
              <Grid container direction="column">
                <Grid container justify="center">
                  <MenuBookRoundedIcon style={{ fontSize: 110, color: 'white' }} />
                  <Typography
                    component="h2"
                    variant="h3"
                    className={classes.gridtext}>
                    آشنایی با کارگاه ها
                </Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>

          <Grid item xs={12} sm={3} className={classes.grid2}>
            <Button>
              <Grid container direction="column">
                <Grid container justify="center">
                  <VideocamIcon style={{ fontSize: 110, color: 'white' }} />
                  <Typography
                    component="h2"
                    variant="h3"
                    className={classes.gridtext}>
                    کلیپ معرفی
                </Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>

        </Grid>
      </Container>

      <Container className={`${classes.section4} ${classes.centerItems}`}>
        <Grid container direction="column" spacing={4}>
          <Grid item className={classes.section4headline}>

            <Typography
              component="h2"
              variant="h2"
              className="fancy">
              <span>زمان بندی رویداد</span>
            </Typography>
          </Grid>
          <Timeline />
        </Grid>
      </Container>


      <Container className={`${classes.section4t} ${classes.centerItems}`}>
        <Grid container direction="column" spacing={4}>
          <Grid item className={classes.section4headline}>
            <Typography
              component="h2"
              variant="h2"
              className="fancy">
              <span>تیم اینترکارسولار</span>
            </Typography>
          </Grid>
          <Grid container direction="row" spacing={4} className={classes.personCard}>
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
              href="members"
              className={classes.section4button}>
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
