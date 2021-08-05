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
import { Link, useParams } from 'react-router-dom';
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
  singleProblem,
  multipleProblem,
  isFetching,
}) => {
  const classes = useStyles();
  const [problem, setProblem] = useState();
  let history = useHistory();
  let { gameId, problemId, singleOrMultiple } = useParams();
  const [textAnswer, setTextAnswer] = useState();
  const [isDialogOpen, setDialogStatus] = useState(false);


  console.log(singleProblem)
  console.log(multipleProblem)

  useEffect(() => {
    getPlayerInfo({ gameId });
    if (singleOrMultiple === 'single') {
      getSpecificSingleProblem({ gameId, problemId });
    } else {
      getSpecificMultipleProblem({ gameId, problemId });
    }
  }, [getSpecificSingleProblem, getSpecificMultipleProblem, gameId, problemId, singleOrMultiple]);


  useEffect(() => {
    if (singleProblem) {
      setProblem(singleProblem.problem)
    } else {
      setProblem(multipleProblem)
    }
  }, [singleProblem, multipleProblem,])


  const submitAnswer = () => {

  }

  return (
    <>
      <ResponsiveAppBar mode="FORMULA0" position={'relative'} hideOnScroll={false} />
      <Container className={classes.container}>
        <Grid container spacing={2} justify='center'>
          <Grid item xs={12}>
            <Typography variant='h1' align="center">{`«${problem?.title || ''}»`}</Typography>
          </Grid>
          <Grid container item spacing={2} xs={12} md={10} lg={8}>
            <Grid container item direction='column' xs={12} md={8} spacing={2}>
              <Grid item>
                <Paper className={classes.paper}>
                  <Grid item container direction='column'>
                    <Grid item>
                      <Typography gutterBottom variant='h3' align='center'>صورت مسئله</Typography>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid item>
                      <TinyPreview
                        frameProps={{
                          frameBorder: '0',
                          scrolling: 'no',
                          width: '100%',
                        }}
                        content={problem?.text} />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                  <Grid item container direction='column' spacing={1}>
                    <Grid item>
                      <Typography gutterBottom variant='h3' align='center'>پاسخ</Typography>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid item>
                      {singleProblem &&
                        <TinyEditor
                          initialValue={singleProblem?.text_answer}
                          onChange={setTextAnswer} />
                      }
                      {multipleProblem &&
                        <TextField
                          onChange={e => setTextAnswer(e.target.value)}
                          label='پاسخ خود را وارد کنید'
                          type='text'
                          inputProps={{ className: 'ltr-input' }}
                          variant='outlined'
                          fullWidth />
                      }
                    </Grid>
                    <Grid item>
                      <Button fullWidth variant='contained' color='primary' onClick={() => setDialogStatus(true)}>ثبت پاسخ</Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>


              {/* <Grid item>
                <Paper className={classes.paper}>
                  <Grid item container direction='column'>
                    <Grid item>
                      <Typography gutterBottom variant='h3' align='center'>نظرات</Typography>
                    </Grid>
                    {problem.comments &&
                      problem.comments.map(comment => {
                        return <Comment text={comment.text} commenterId={comment.writer} />
                      })
                    }
                    <CreateComment id={problemId} />
                  </Grid>
                </Paper>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid >
      </Container>
      <AreYouSure
        open={isDialogOpen}
        handleClose={() => { setDialogStatus(!isDialogOpen) }}
        callBackFunction={submitAnswer}
      />
    </>
  );

}

const mapStateToProps = (state) => {
  return ({
    singleProblem: state.game.singleProblem,
    multipleProblem: state.game.multipleProblem,
  });
}

export default connect(
  mapStateToProps,
  {
    getSpecificSingleProblem,
    getSpecificMultipleProblem,
    getPlayerInfo,
  }
)(ViewProblem);