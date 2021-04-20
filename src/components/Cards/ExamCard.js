import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import jMoment from 'jalali-moment';
import Description from '../Dialog/ExamRegistration';
import dateFormatter from '../../utils/dateFormatter';
import { connect } from 'react-redux'
import {
  Paper,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import { registerInExam } from '../../redux/actions/exam';

const STUDENT_EXAM_STATUS = [
  [0, 'مجاز به ثبت‌نام'],
  [1, 'ثبت‌نام شده'],
  [2, 'پذیرفته ‌شده'],
  [3, 'پذیرفته نشده'],
]

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '100%',
    width: '100%',
    maxWidth: '20rem',
    fontSize: '1rem',
    textDecoration: 'none',
    overflow: 'hidden',
    boxShadow: '0 0 2rem -1.5rem rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.1s ease-in-out',
    maxWidth: '300px',
    '&:hover': {
      transform: 'translateY(-0.2rem) scale(1.02)',
      boxShadow: '0 0.5em 0.5rem -0.5rem rgba(0, 0, 0, 0.5)',
    }
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
  notificationTitle: {
    fontSize: 28,
    color: '#4d4a70',
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'rgb(255, 255, 255, 0.94)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Index = ({
  registerInExam,
  id,
  title,
  start_date,
  finish_date,
  cost,
  status,
  registration_start,
  registration_deadline,
  registration_description,
}) => {
  const [isDialogueOpen, setDialogueOpen] = useState(false);
  const [isExamStarted, setExamStartStatus] = useState(false);
  const [isExamFinished, setExamFinishStatus] = useState(false);
  const [isExamRegistrationStarted, setExamRegistrationStartStatus] = useState(false);
  const [isExamRegistrationFinished, setExamRegistrationFinishStatus] = useState(false);

  useEffect(() => {
    setExamStartStatus(jMoment().isAfter(jMoment(start_date)))
    setExamFinishStatus(jMoment().isAfter(jMoment(finish_date)))
    setExamRegistrationStartStatus(jMoment().isAfter(jMoment(registration_start)))
    setExamRegistrationFinishStatus(jMoment().isAfter(jMoment(registration_deadline)))
  }, [start_date, finish_date, registration_start, registration_deadline])
  const classes = useStyles();

  const doRegister = () => {
    registerInExam({ exam_id: id }).then(() => {
      setTimeout(() => {
        window.location.reload()
      }, 3000)
    })
  }

  return (
    <>
      <Paper className={`${classes.paper} ${classes.root}`}>
        <Grid container justify='space-evenly' alignItem='space-between' spacing={2}>
          <Grid item container justify='center' alignItems='center' spacing={1}>
            <Grid item xs={8}>
              <Typography variant="h3" className={classes.notificationTitle}>
                {title}
              </Typography>
            </Grid>
            <Grid item container justify='center' xs={4}>
              <Typography align='center' variant="h5" >
                {STUDENT_EXAM_STATUS[status][1]}
              </Typography>
            </Grid>
          </Grid>
          {status == 0 &&
            <Grid item xs={12}>
              <Typography variant='subtitle'>
                {'برای ثبت‌نام در آزمون، روی دکمه‌ی زیر کلیک کن!'}
              </Typography>
            </Grid>
          }
          {status == 1 &&
            <Grid item xs={12}>
              <Typography variant='subtitle'>
                {`این آزمون ${dateFormatter({ date: start_date, format: 'dddd، Do MMMM، ساعت H:mm' })} شروع میشه و تا ${dateFormatter({ date: finish_date, format: 'dddd، Do MMMM، ساعت H:mm' })} ادامه داره.`}
              </Typography>
            </Grid>
          }
          {status == 2 &&
            <Grid item xs={12}>
              <Typography variant='subtitle'>
                {'ایول! قبول‌شدنت تو این آزمون رو تبریک میگم!'}
              </Typography>
            </Grid>
          }
          {status == 3 &&
            <Grid item xs={12}>
              <Typography variant='subtitle'>
                {'خب! بعضی وقت‌ها نمیشه دیگه :( ایشالا یه بار دیگه هم بتونیم هم‌دیگه رو ببینیم!'}
              </Typography>
            </Grid>
          }
          {status == 0 &&
            <Grid item xs={12}>
              <Button disabled={isExamRegistrationFinished || !isExamRegistrationStarted} variant='contained' color='secondary' fullWidth
                onClick={() => setDialogueOpen(true)}>
                {isExamRegistrationFinished ? 'مهلت ثبت‌نام تمام شده' : (!isExamRegistrationStarted ? 'ثبت‌نام هنوز شروع نشده' : 'ثبت‌نام')}
              </Button>
            </Grid>
          }
          {status == 1 &&
            <Grid item xs={12}>
              <Button variant='contained' color='secondary' fullWidth disabled={isExamFinished || !isExamStarted} href={`/exam/${id}`}>
                {!isExamStarted ? 'آزمون هنوز شروع نشده' : (isExamFinished ? 'آزمون تمام شده' : 'ورود')}
              </Button>
            </Grid>
          }
        </Grid>
      </Paper >
      <Description
        title={title}
        description={registration_description}
        deadline={registration_deadline}
        open={isDialogueOpen}
        cost={cost}
        register={doRegister}
        handleClose={() => { setDialogueOpen(!isDialogueOpen) }}
      />
    </>
  );
}


export default connect(null, { registerInExam })(Index);