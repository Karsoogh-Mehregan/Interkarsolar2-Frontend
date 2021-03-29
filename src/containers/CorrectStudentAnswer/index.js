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
import {
  getAnswerForCorrection,
  setAnswerScore,
} from '../../redux/actions/mentor'
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import TinyEditorComponent from '../../components/tiny_editor/react_tiny/TinyEditorComponent';

const useStyles = makeStyles((theme) => ({
  centerItems: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    width: '100%',
  }
}))

const Index = ({
  getAnswerForCorrection,
  setAnswerScore,
}) => {
  const classes = useStyles();

  useEffect(() => {
    // clearInputFile();
    const fetchPreviousAnswers = async () => {
      let action = await getAnswerForCorrection({ ans_id: 1 });
      console.log(action);
      action = await setAnswerScore({ ans_id: 1, score: 20 });
      console.log(action);
    }
    fetchPreviousAnswers();

  }, [])


  return (
    <Container className={`${classes.centerItems}`}>
      <Grid container justify='center' spacing={2}>

        <Grid item justify='center' alignItems='center' xs={12} sm={9} md={6} spacing={2}>
          <TinyEditorComponent content={'salam'} />
        </Grid>


        <Grid container item xs={12} sm={9} md={3} spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container direction='column' spacing={2}>
                <Grid item>
                  <Typography align='center' variant='h2'>
                    {'ss'}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    {'salam'}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
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
    getAnswerForCorrection,
    setAnswerScore,
  }
)(Index)