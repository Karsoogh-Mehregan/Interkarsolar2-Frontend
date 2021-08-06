import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  makeStyles,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Divider,
  Button,
  FormControl,
  FormControlLabel,
  Select,
  InputLabel,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toPersianNumber } from '../../utils/translateNumber';
import { toast } from 'react-toastify'
import AreYouSure from '../../components/Dialog/AreYouSure';
import {
  getAllSingleProblems,
  getAllMultipleProblems,
  getRandomSingleProblem,
  getRandomMultipleProblem,
  getAllSubjects,
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
}))

const DIFFICULTY = {
  'EASY': 'آسان',
  'MEDIUM': 'متوسط',
  'HARD': 'سخت',
}

const STATUS = {
  'RECEIVED': 'دریافت‌شده',
  'DELIVERED': 'در انتظار تصحیح',
  'SCORED': 'تصحیح‌شده',
}

const PlayerProblems = ({
  getAllSingleProblems,
  getAllMultipleProblems,
  getAllSubjects,
  getRandomSingleProblem,
  getRandomMultipleProblem,
  getPlayerInfo,
  allSubjects,
  singleProblems,
  multipleProblems,
  isFetching
}) => {
  const classes = useStyles();
  const [properties, setProperties] = useState({ difficulty: 'EASY', subject: '' });
  const [requestedProblemType, setRequestedProblemType] = useState('single');
  const [isDialogOpen, setDialogStatus] = useState(false);
  let { gameId } = useParams();


  useEffect(() => {
    getAllSingleProblems({ gameId });
    getAllMultipleProblems({ gameId });
    getAllSubjects({ gameId });
    getPlayerInfo({ gameId });
  }, [])


  const handleSelect = (e) => {
    setProperties({
      ...properties,
      [e.target.name]: e.target.value,
    })
  }

  const getProblem = (e) => {
    if (requestedProblemType === 'single') {
      if (!properties.difficulty) {
        toast.error('لطفا سختی مسئله‌ی درخواستی را وارد کنید!')
        return;
      }
      getRandomSingleProblem({ gameId, ...properties })
    } else {
      getRandomMultipleProblem({ gameId })
    }
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
        callBackFunction={getProblem}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  allSubjects: state.game.allSubjects,
  singleProblems: state.game.singleProblems,
  multipleProblems: state.game.multipleProblems,
  isFetching: state.game.isFetching,
})

export default connect(
  mapStateToProps,
  {
    getAllSubjects,
    getAllSingleProblems,
    getAllMultipleProblems,
    getRandomSingleProblem,
    getRandomMultipleProblem,
    getPlayerInfo,
  }
)(PlayerProblems)