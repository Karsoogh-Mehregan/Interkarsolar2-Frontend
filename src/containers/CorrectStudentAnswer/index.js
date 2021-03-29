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
  TextField,
} from '@material-ui/core';
import {
  getAnswerForCorrection,
  setAnswerScore,
} from '../../redux/actions/mentor'
import { useParams } from "react-router-dom";
import TextWidget from '../../components/Widget/TextWidget';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

const BASE_URL_OF_FILES_ON_DATABASE = 'https://backend.interkarsolar.ir/media/'

const useStyles = makeStyles((theme) => ({
  centerItems: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    width: '100%',
  },
  textArea: {
    width: '100%',
    resize: 'vertical',
    borderRadius: '10px',
    minHeight: '100px',
    padding: theme.spacing(1),
  }
}))

const Index = ({
  getAnswerForCorrection,
  setAnswerScore,
}) => {
  const classes = useStyles();
  const [isFetching, setIsFetching] = useState(false);
  const [score, setScore] = useState();
  const [comment, setComment] = useState();
  const [answerId, setAnswerId] = useState();
  const [question, setQuestion] = useState();
  const [textAnswer, setTextAnswer] = useState();
  const [fileAnswer, setFileAnswer] = useState();

  const isDigit = (string) => {
    var regex = new RegExp(`\\d+`);
    if (regex.test(string)) {
      return true;
    } else {
      return false;
    }
  }

  const fetchAnswer = async () => {
    setScore();
    setQuestion();
    setTextAnswer();
    setFileAnswer();
    setComment();
    if (!isDigit(answerId)) {
      toast.error('تو شناسه‌ی سوال فقط از ارقام انگلیسی استفاده کن!');
      return;
    }
    setIsFetching(true);
    const action = await getAnswerForCorrection({ ans_id: answerId });
    if (!action || !action.response || !action.response.data) {
      toast.error('یه اشکالی وجود داره! به تیم فنی خبر بده :(');
      setIsFetching(false);
      return;
    }
    setQuestion(<TextWidget text={action.response.data.text} />);
    setTextAnswer(<TextWidget text={action.response.data.answer_text} />);
    setComment(action.response.data.comment);
    if (action.response.data.answer_file) {
      setFileAnswer(BASE_URL_OF_FILES_ON_DATABASE + action.response.data.answer_file);
    }
    setIsFetching(false);
  }

  const submitScore = async () => {
    if (!isDigit(score) && score != null) {
      toast.error('نمره فقط می‌تونه رقم انگلیسی باشه!');
      return;
    }
    if (score < 0 || score > 10) {
      toast.error('لطفاً یک نمره بین ۰ تا ۱۰ وارد کن!');
      return;
    }
    setIsFetching(true);
    const action = await setAnswerScore({ ans_id: answerId, score, comment });
    if (!action || !action.response || !action.response.data) {
      toast.error('یه اشکالی وجود داره! به تیم فنی خبر بده :(');
      setIsFetching(false);
      return;
    }
    toast.success('نمره با موفقیت ثبت شد!');
    setIsFetching(false);
  }

  return (
    <Container className={`${classes.centerItems}`}>
      <Grid container justify='center' spacing={2}>

        <Grid item container justify='flex-start' alignItems='center' xs={12} sm={9} spacing={2}>
          <Grid item >
            <TextField label='شناسه‌ی پاسخ را وارد کنید' variant='outlined' value={answerId} onChange={(e) => setAnswerId(e.target.value)} />
          </Grid>
          <Grid item >
            <Button disabled={!answerId || isFetching} variant='contained' color='primary' onClick={fetchAnswer}>
              {'دریافت پاسخ'}
            </Button>
          </Grid>
        </Grid>

        {question &&
          <>
            <Grid item container justify='center' alignItems='flex-start' xs={12} sm={9} md={6} spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Grid container direction='column' spacing={2} >
                    <Grid item>
                      <Typography variant='h2'>
                        {'صورت سوال'}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {question}
                    </Grid>
                    <Grid item>
                      <Typography variant='h2'>
                        {'پاسخ تایپ‌شده'}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {textAnswer}
                    </Grid>
                    {fileAnswer &&
                      <Grid item xs={12}>
                        <a href={fileAnswer} >
                          {'دانلود فایل پاسخ'}
                        </a>
                      </Grid>
                    }
                  </Grid>
                </Paper>
              </Grid>
            </Grid>


            <Grid item container justify='center' alignItems='flex-start' xs={12} sm={9} md={3} spacing={2}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Grid container direction='column' spacing={2} >
                    <Grid item>
                      <Typography align='center' variant='h2'>
                        {'نمره‌دهی'}
                      </Typography>
                    </Grid>
                    <Grid item >
                      <TextField fullWidth label='نمره' variant='outlined' value={score} onChange={(e) => setScore(e.target.value)} />
                    </Grid>
                    <Grid item>
                      <Typography variant='caption'>
                        {'نظر مصحح:'}
                      </Typography>
                      <textarea value={comment} className={classes.textArea} onChange={(e) => setComment(e.target.value)} />
                    </Grid>
                    <Grid item >
                      <Button disabled={isFetching} variant='contained' fullWidth color='primary' onClick={submitScore}>
                        {'ثبت'}
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </>
        }
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
    getAnswerForCorrection,
    setAnswerScore,
  }
)(Index)