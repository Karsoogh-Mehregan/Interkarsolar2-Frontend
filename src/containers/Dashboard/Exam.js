import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Button,
  Checkbox,
  Hidden,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
  doPayment,
  ignorePayment,
} from '../../redux/actions/account'
import {
  getExamQuestionsList,
  getStudentExams,
} from '../../redux/actions/exam'
import ExamCard from '../../components/Cards/ExamCard';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    width: '100wh',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  sadImage: {
    height: '50vh',
    background: `url(${process.env.PUBLIC_URL + '/sad.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  readyImage: {
    height: '50vh',
    background: `url(${process.env.PUBLIC_URL + '/ready.png'})`,
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
  header3: {
    fontSize: 25,
    lineHeight: '30px',
    textShadow: '-2px 2px 5px #444444',
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
}))


const ExamTab = ({ isFetching, getStudentExams, exams }) => {
  const classes = useStyles();

  const showToast = () => {
    toast.info('مسابقه هنوز شروع نشده. یکم صبر کنین!');
  }

  useEffect(() => {
    getStudentExams();
  }, [])

  return (
    <Container style={{ overflow: 'hidden' }}>
      <Grid
        className={classes.root}
        container
        justify='space-evenly'
        alignItems='center'
        spacing={4}
      >
        <Grid item container justify='center'>
          <Typography variant='h2' className={classes.title} >
            {'آزمون‌ها'}
          </Typography>
        </Grid>
        <Grid container item direction='row' justify='center' alignItems='center' spacing={2}>
          <Grid item container justify='center' xs={12}>
            <Typography variant='h1'>
              {'یکم دندون رو جیگر بذارین! نتایج داره میاد :))'}
            </Typography>
          </Grid>

          {/* {
            exams.map((exam) => {
              return (
                <Grid item container justify='center' xs={12} sm={6} md={3}>
                  <ExamCard {...exam} />
                </Grid>
              )
            })
          } */}
        </Grid>
      </Grid>
    </Container >
  )
}

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.account.isFetching,
  exams: state.exam.exams ? state.exam.exams : [],
})

export default connect(
  mapStateToProps,
  {
    doPayment,
    ignorePayment,
    getExamQuestionsList,
    getStudentExams,
  }
)(ExamTab);
