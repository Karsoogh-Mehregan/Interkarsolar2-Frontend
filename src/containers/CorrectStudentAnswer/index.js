import React, { useState, useEffect, useRef } from 'react';
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
  const [score1, setScore1] = useState();
  const [doesScore1HaveValue, setScore1PreviousValue] = useState(false);
  const [score2, setScore2] = useState();
  const [doesScore2HaveValue, setScore2PreviousValue] = useState(false);
  const [comment, setComment] = useState();
  const [answerId, setAnswerId] = useState();
  const [question, setQuestion] = useState();
  const [textAnswer, setTextAnswer] = useState();
  const [fileAnswer, setFileAnswer] = useState();
  const fetchAnswerButton = useRef();

  const isDigit = (string) => {
    var regex = new RegExp(`\\d+`);
    if (regex.test(string)) {
      return true;
    } else {
      return false;
    }
  }

  const fetchAnswerByEnter = (e) => {
    if (e.key !== 'Enter') return;
    fetchAnswer();
  }

  const fetchAnswer = async () => {
    setScore1();
    setScore2();
    setScore1PreviousValue();
    setScore2PreviousValue();
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
    if (!action || !action.data) {
      toast.error('یه اشکالی وجود داره! به تیم فنی خبر بده :(');
      setIsFetching(false);
      return;
    }
    setScore1PreviousValue(action.data.score1);
    setScore2PreviousValue(action.data.score2);
    console.log(action.data);
    setQuestion(<TextWidget text={action.data.text} />);
    setTextAnswer(<TextWidget text={action.data.answer_text} />);
    setComment(action.data.comment);
    if (action.data.answer_file) {
      setFileAnswer(BASE_URL_OF_FILES_ON_DATABASE + action.data.answer_file);
    }
    setIsFetching(false);
  }

  const submitScore = async () => {
    if ((!isDigit(score1) && score1 != null) || (!isDigit(score2) && score2 != null)) {
      toast.error('نمره فقط می‌تونه رقم انگلیسی باشه!');
      return;
    }
    if (score1 < 0 || score1 > 10 || score2 < 0 || score2 > 10) {
      toast.error('لطفاً یک نمره بین ۰ تا ۱۰ وارد کن!');
      return;
    }
    setIsFetching(true);
    const action = await setAnswerScore({ ans_id: answerId, score1, score2, comment });
    if (!action || !action.data) {
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
            <TextField
              label='شناسه‌ی پاسخ را وارد کنید' variant='outlined'
              value={answerId} onChange={(e) => setAnswerId(e.target.value)}
              inputProps={{ className: 'ltr-input' }}
              onKeyPress={fetchAnswerByEnter} />
          </Grid>
          <Grid item >
            <Button ref={fetchAnswerButton}
              disabled={!answerId || isFetching}
              variant='contained' color='primary'
              onClick={fetchAnswer}>
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
                      <TextField helperText={(doesScore1HaveValue == 'None' || doesScore1HaveValue == 0) ? '' : 'نمره‌ی اول قبلاً ثبت شده.'}
                        fullWidth label='نمره‌ی ۱' variant='outlined'
                        value={score1} onChange={(e) => setScore1(e.target.value)} />
                    </Grid>
                    <Grid item >
                      <TextField helperText={(doesScore2HaveValue == 'None' || doesScore2HaveValue == 0) ? '' : 'نمره‌ی دوم قبلاً ثبت شده.'}
                        fullWidth label='نمره‌ی ۲' variant='outlined'
                        value={score2} onChange={(e) => setScore2(e.target.value)} />
                    </Grid>
                    <Grid item>
                      <TextField multiline rows={5}
                        fullWidth label='نظرات مصححین' variant='outlined'
                        value={comment == 'None' ? '' : comment} onChange={(e) => setComment(e.target.value)} />
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