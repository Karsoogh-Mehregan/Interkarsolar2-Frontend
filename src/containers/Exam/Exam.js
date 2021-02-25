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
import UploadFileWidget from '../../components/Widget/UploadFileQuestionWidget';
import VideoWidget from '../../components/Widget/VideoWidget';
import MiniGameWidget from '../../components/Widget/MiniGameWidget';

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
  examQuestionList,
  question,
}) => {
  const classes = useStyles();
  const [, rerenderPage] = useState();
  const [isNextProblemButtonDisabled, setNextProblemButtonStatus] = useState(false);
  const [isPreviousProblemButtonDisabled, setPreviousProblemButtonStatus] = useState(false);
  const { examID, questionID } = useParams();

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


  const goToQuestion = (questionID) => {
    redirect(`/exam/${examID}/${questionID}`);
  }

  useEffect(
    () => {
      if (!questionID && examQuestionList) {
        goToQuestion(examQuestionList[0].id);
      }
    }
    , [examQuestionList, examID, redirect, questionID])

  useEffect(
    () => {
      if (questionID && examQuestionList) {
        getQuestionContents(questionID);
        if (questionID == examQuestionList[0].id) {
          setPreviousProblemButtonStatus(true);
        } else {
          setPreviousProblemButtonStatus(false);
        }
        if (questionID == examQuestionList[examQuestionList.length - 1].id) {
          setNextProblemButtonStatus(true);
        } else {
          setNextProblemButtonStatus(false);
        }
      }
    }
    , [getQuestionContents, examQuestionList, questionID, setPreviousProblemButtonStatus, setNextProblemButtonStatus])


  console.log(question);

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
                    <Button disabled={isNextProblemButtonDisabled} onClick={() => goToQuestion(parseInt(questionID) + 1)}>سوال بعدی</Button>
                    <Button disabled={isPreviousProblemButtonDisabled} onClick={() => goToQuestion(parseInt(questionID) - 1)}>سوال قبلی</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={9} md={6} direction='column' spacing={2}>
          <Grid item>
            <UploadFileWidget />
          </Grid>
          {question && question.contents &&
            question.contents.map((content) => {
              if (content.type == 1) {
                return (
                  <Grid item>
                    <TextWidget text={content.content_desc} />
                  </Grid>
                )
              } else if (content.type == 2) {
                return (
                  <Grid item>
                    <VideoWidget link={content.content_desc} />
                  </Grid>
                )
              } else if (content.type == 3) {
                return (
                  <Grid item>
                    <ImageWidget link={content.content_desc} />
                  </Grid>
                )
              }
            })
          }
        </Grid>
        <Grid container item xs={12} direction='column' spacing={2}>
          {question && question.contents &&
            question.contents.map((content) => {
              if (content.type == 4) {
                return (
                  <Grid item>
                    <MiniGameWidget link={content.content_desc} />
                  </Grid>
                )
              }
            })
          }
        </Grid>
      </Grid>

    </Container>
  )
}

const mapStateToProps = (state, ownProps) => ({
  examQuestionList: state.exam.examQuestionList,
  question: state.exam.question,
})

export default connect(
  mapStateToProps,
  {
    redirect,
    getExamQuestionsList,
    getQuestionContents,
  }
)(Exam)