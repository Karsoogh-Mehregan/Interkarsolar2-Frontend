import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Container,
  Grid,
  ButtonGroup,
  Button,
  Typography,
  Paper,
  Divider,
} from '@material-ui/core';
import TinyPreview from '../../components/tiny_editor/react_tiny/Preview'
import Editor from '../../components/tiny_editor/react_tiny/TinyEditorComponent'

import ImageWidget from '../../components/Widget/ImageWidget';
import BigAnswerQuestionWidget from '../../components/Widget/BigAnswerQuestionWidget';
import TextWidget from '../../components/Widget/TextWidget';
// import UploadFileQuestionWidget from '../components/Widget/UploadFileQuestionWidget';
// import VideoWidget from '../components/Widget/VideoWidget';

import {
  getExamQuestionsList,
  getQuestionContents,
} from '../../redux/actions/exam'
import {
  redirect,
} from '../../redux/actions/redirect'
import {
  useParams,
  Link,
} from "react-router-dom";

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: '#e3dae5',
    paddingTop: theme.spacing(2),
  },
  centerItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  paper: {
    padding: theme.spacing(2),
  },
  h_iframe_aparat_embed_frame: {
    position: 'relative',
    height: '50vh',
    '& iframe': {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
      boxShadow: '0 2px 4px rgb(0 0 0 / 15%), 0 1px 3px rgb(0 0 0 / 25%)',
      borderRadius: 8,
    },
    '& span': {
      display: 'block',
      paddingTop: '57%',
    },
  },
}))

const Exam = ({
  redirect,
  getExamQuestionsList,
  getQuestionContents,
  examQuestionList
}) => {
  const classes = useStyles();
  const [, rerenderPage] = useState();
  const { examID, questionID } = useParams();

  console.log(examID, questionID);

  useEffect(
    () => {
      setTimeout(
        () => {
          rerenderPage(Math.random());
        }
        , 2000)
    }
    , [])

  useEffect(
    () => {
      getExamQuestionsList(examID)
    }
    , [getExamQuestionsList, examID])

  useEffect(
    () => {
      if (examQuestionList) {
        redirect(`/exam/${examID}/${examQuestionList[0].id}`);
      }
    }
    , [examQuestionList, examID, redirect])


  return (
    <Container className={`${classes.centerItems} ${classes.container}`}>
      <Grid
        container
        direction='row'
        justify='center'
        spacing={2}>

        <Grid container item xs={12} sm={9} md={3} direction='column' spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Grid container direction='column' spacing={2}>
                <Grid item>
                  <Typography align='center' variant='h2'>
                    سوال اول
                    </Typography>
                </Grid>
                <Divider />
                <Grid item>
                  <Typography>
                    در این سوال، ما به کشف نیروهای خارق‌العاده و قدرت چرت و پرت نویسیِ نویسنده پی می‌بریم. حواستان باشد در دام آموزشی سوال نیافتید...
                    </Typography>
                </Grid>
                <Grid item container justify='center'>
                  <ButtonGroup variant='contained' color="primary" aria-label="text primary button group">
                    <Button>سوال بعدی</Button>
                    <Button>سوال قبلی</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={9} md={6} direction='column' spacing={2}>
          <Grid item>
            <TextWidget
              text='خب بچه‌ها. باز دوباره با کارسوق برگشتیم. ایشالا یه رویداد تماماً فیل رو در کنارتون برگزار کنیم. علی‌الحساب بیاین باب‌اسفنجی ببینین کیف کنین:' />
          </Grid>
          <Grid item >
            <div className={classes.h_iframe_aparat_embed_frame}>
              {/* <span></span> */}
              <iframe
                title="کارگاه‌های رستا"
                src="https://www.aparat.com/video/video/embed/videohash/B8VfK/vt/frame"
                allowFullScreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"></iframe>
            </div>
          </Grid>
          <Grid item>
            <BigAnswerQuestionWidget
              text='خب فیلم رو دیدین؟ بسه دیگه. برید خونه‌هاتون. کارسوق فیله. مرگ بر رستا. مرگ بر کارسوق. مرگ بر شفیعیون. قبل از این که برید، بیاید به این سوال جواب بدین تا ببینم چی به چیه. اگه عکسی چیزی باید آپلود می‌کردین، آپلود کنین. آفرین بچه‌های خوب...'
            />
          </Grid>
          <Grid item>
            <ImageWidget link='https://media.mehrnews.com/d/2020/08/11/3/3521680.jpg' />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => ({
  examQuestionList: state.exam.examQuestionList,
})

export default connect(
  mapStateToProps,
  {
    redirect,
    getExamQuestionsList,
    getQuestionContents,
  }
)(Exam)