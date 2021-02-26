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
import ImageWidget from '../../components/Widget/ImageWidget';
import AnswerWidget from '../../components/Widget/AnswerWidget';
import TextWidget from '../../components/Widget/TextWidget';
import VideoWidget from '../../components/Widget/VideoWidget';
import MiniGameWidget from '../../components/Widget/MiniGameWidget';
import {
  getExamQuestionsList,
  getQuestionContents,
} from '../../redux/actions/exam'
import { redirect } from '../../redux/actions/redirect'
import { useParams } from "react-router-dom";
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
  isFetching,
  redirect,
  getExamQuestionsList,
  getQuestionContents,
  examQuestionList,
  question,
}) => {
  const classes = useStyles();
  const [isNextProblemButtonDisabled, setNextProblemButtonStatus] = useState(false);
  const [isPreviousProblemButtonDisabled, setPreviousProblemButtonStatus] = useState(false);
  const { examID, questionID } = useParams();

  useEffect(
    () => {
      getExamQuestionsList(examID)
    }
    , [getExamQuestionsList, examID])


  useEffect(
    () => {
      if (!questionID && examQuestionList && examQuestionList[0]) {
        goToQuestion(examQuestionList[0].id);
      }
    }
    , [examQuestionList, examID, redirect, questionID])

  const goToQuestion = (questionID) => {
    redirect(`/exam/${examID}/${questionID}`);
  }

  const getQuestionIndex = (questionID) => {
    for (let i = 0; i < examQuestionList.length; i++) {
      if (examQuestionList[i].id == questionID) {
        return i;
      }
    }
  }

  const getNextQuestionID = (questionID) => {
    let index = getQuestionIndex(questionID);
    return examQuestionList[index + 1].id;
  }

  const getPreviousQuestionID = (questionID) => {
    let index = getQuestionIndex(questionID);
    return examQuestionList[index - 1].id;
  }


  useEffect(
    () => {
      if (questionID && examQuestionList && examQuestionList[0] && examQuestionList[examQuestionList.length - 1]) {
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
                    {question && question.title}
                  </Typography>
                </Grid>
                <Divider />
                <Grid item>
                  <Typography>
                    {question && question.description}
                  </Typography>
                </Grid>
                <Grid item container justify='center'>
                  <ButtonGroup variant='contained' color="primary" aria-label="text primary button group">
                    <Button disabled={isNextProblemButtonDisabled} onClick={() => goToQuestion(parseInt(getNextQuestionID(questionID)))}>سوال بعدی</Button>
                    <Button disabled={isPreviousProblemButtonDisabled} onClick={() => goToQuestion(parseInt(getPreviousQuestionID(questionID)))}>سوال قبلی</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={9} md={6} direction='column' spacing={2}>
          {question && question.contents &&
            question.contents.map((content) => {
              if (content.type == 1) {
                return (
                  <Grid item id={Math.random()}>
                    <TextWidget text={content.content_desc} />
                  </Grid>
                )
              } else if (content.type == 2) {
                return (
                  <Grid item id={Math.random()}>
                    <VideoWidget link={content.content_desc} />
                  </Grid>
                )
              } else if (content.type == 3) {
                return (
                  <Grid item>
                    <ImageWidget link={content.content_desc} />
                  </Grid>
                )
              } else if (content.type == 5) {
                return (
                  <Grid item id={Math.random()}>
                    <AnswerWidget qc_id={content.qc_id} text={content.content_desc} />
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
                  <Grid item id={Math.random()}>
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
  isFetching: state.exam.isFetching,
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