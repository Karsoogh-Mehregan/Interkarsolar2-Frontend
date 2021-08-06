import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  makeStyles,
  Divider,
  Button,
  ButtonGroup,
  Chip,
  TextField,
} from '@material-ui/core';
import { Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import TinyPreview from '../../components/tiny_editor/react_tiny/Preview';
import TinyEditor from '../../components/tiny_editor/react_tiny/TinyEditorComponent';
import { toPersianNumber } from '../../utils/translateNumber';
import { toast } from 'react-toastify'
import AreYouSure from '../../components/Dialog/AreYouSure';
import {
  getSpecificSingleProblem,
  getSpecificMultipleProblem,
  getPlayerInfo,
  submitSingleProblemAnswer,
  submitMultipleProblemAnswer,
  getProblemHints,
  submitNewHint,
} from '../../redux/actions/game';
import ResponsiveAppBar from '../../components/Appbar/ResponsiveAppBar'


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    width: '100%',
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

const ViewProblem = ({
  getSpecificSingleProblem,
  getSpecificMultipleProblem,
  getPlayerInfo,
  submitSingleProblemAnswer,
  submitMultipleProblemAnswer,
  getProblemHints,
  submitNewHint,
  hints,
  singleProblem,
  multipleProblem,
  isFetching,
}) => {
  const classes = useStyles();
  const [problem, setProblem] = useState();
  let { gameId, problemId, singleOrMultiple } = useParams();
  const [textAnswer, setTextAnswer] = useState('');
  const [isDialogOpen, setDialogStatus] = useState(false);
  const [isDialogOpen2, setDialogStatus2] = useState(false);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    getPlayerInfo({ gameId });
    if (singleOrMultiple === 'single') {
      getSpecificSingleProblem({ gameId, problemId });
    } else {
      getProblemHints({ gameId, problemId })
      getSpecificMultipleProblem({ gameId, problemId });
    }
  }, [getProblemHints, getSpecificSingleProblem, getSpecificMultipleProblem, getPlayerInfo, gameId, problemId, singleOrMultiple]);

  useEffect(() => {
    if (singleProblem) {
      setProblem(singleProblem.problem)
    }
    if (multipleProblem) {
      setProblem(multipleProblem)
    }
  }, [singleProblem, multipleProblem,])


  if (singleProblem?.status === 'DELIVERED' ||
    singleProblem?.status === 'SCORED' ||
    multipleProblem?.status === 'DELIVERED' ||
    multipleProblem?.status === 'SCORED') {
    return (<Redirect to={`/game/${gameId}/my_problems/`} />)
  }

  const submitAnswer = () => {
    console.log(textAnswer)
    if (singleOrMultiple === 'single') {
      submitSingleProblemAnswer({ gameId, problemId, answer: textAnswer });
    } else {
      console.log(textAnswer)
      submitMultipleProblemAnswer({ gameId, problemId, answer: textAnswer });
    }
  }


  const submitHint = () => {
    submitNewHint({ gameId, problemId, question, single_or_multiple: singleOrMultiple })
  }

  return (
    <>
      <ResponsiveAppBar mode="FORMULA0" position={'relative'} hideOnScroll={false} />
      <Container className={classes.container}>
        <Typography align='text' variant='h1'>
          مسابقه تموم شد! ساعت ۷ منتظر اختتامیه باشید!
        </Typography>
      </Container>
      <AreYouSure
        open={isDialogOpen}
        handleClose={() => { setDialogStatus(!isDialogOpen) }}
        callBackFunction={submitAnswer}
      />
      <AreYouSure
        open={isDialogOpen2}
        handleClose={() => { setDialogStatus2(!isDialogOpen2) }}
        callBackFunction={submitHint}
      />
    </>
  );

}

const mapStateToProps = (state) => {
  return ({
    singleProblem: state.game.singleProblem,
    multipleProblem: state.game.multipleProblem,
    hints: state.game.hints,
  });
}

export default connect(
  mapStateToProps,
  {
    getSpecificSingleProblem,
    getSpecificMultipleProblem,
    getPlayerInfo,
    submitSingleProblemAnswer,
    submitMultipleProblemAnswer,
    getProblemHints,
    submitNewHint,
  }
)(ViewProblem);