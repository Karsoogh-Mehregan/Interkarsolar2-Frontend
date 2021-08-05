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
import { useHistory } from "react-router-dom";
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
} from '../../redux/actions/game';


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
  'DELIVERED': 'تحویل‌داده‌شده',
  'SCORED': 'تصحیح‌شده',
}

const PlayerProblems = ({
  getAllSingleProblems,
  getAllMultipleProblems,
  getAllSubjects,
  getRandomSingleProblem,
  getRandomMultipleProblem,
  allSubjects,
  singleProblems,
  multipleProblems,
  isFetching
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [properties, setProperties] = useState({ difficulty: '', subject: '' });
  const [requestedProblemType, setRequestedProblemType] = useState('single');
  const [isDialogOpen, setDialogStatus] = useState(false);
  let { gameId } = useParams();


  useEffect(() => {
    getAllSingleProblems({ gameId });
    getAllMultipleProblems({ gameId });
    getAllSubjects({ gameId });
  }, [])


  const handleSelect = (e) => {
    setProperties({
      ...properties,
      [e.target.name]: e.target.value,
    })
  }

  const getProblem = (e) => {
    if (!properties.difficulty || !properties.subject) {
      toast.error('لطفا هم مبحث و هم سختی مسئله‌ی درخواستی را وارد کنید!')
      return;
    }
    if (requestedProblemType === 'single') {
      getRandomSingleProblem({ gameId, ...properties })
    } else {
      getRandomMultipleProblem({ gameId })
    }
  }

  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={2} justify='center'>
          <Grid item xs={12}>
            <Typography variant="h1" align="center">«مسئله‌های من»</Typography>
          </Grid>
          <Grid item container spacing={2} xs={12} md={10} lg={8}>
            <Grid item container xs={12} sm={8} direction='column'>
              <TableContainer component={Paper}>
                <Table >
                  <TableHead>
                    <TableRow>
                      <TableCell>شناسه</TableCell>
                      <TableCell>عنوان</TableCell>
                      <TableCell>سختی</TableCell>
                      <TableCell>وضعیت</TableCell>
                      <TableCell>نمره</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {singleProblems.map((mySingleProblem, index) =>
                      <TableRow key={index}>
                        <TableCell>{toPersianNumber(mySingleProblem.id)}</TableCell>
                        <TableCell >
                          <a as={Link} href={'/problem/' + mySingleProblem.id}>{mySingleProblem.problem?.title}</a>
                        </TableCell>
                        <TableCell>{DIFFICULTY[mySingleProblem.problem?.difficulty]}</TableCell>
                        <TableCell>{STATUS[mySingleProblem.status]}</TableCell>
                        <TableCell>{mySingleProblem.mark == -1 ? '-' : mySingleProblem.mark}</TableCell>
                      </TableRow>
                    )}
                    {multipleProblems.map((myMultipleProblem, index) => {
                      console.log(myMultipleProblem)
                      return (
                        <TableRow key={index}>
                          <TableCell>{toPersianNumber(myMultipleProblem.id)}</TableCell>
                          <TableCell >
                            <a as={Link} href={'/problem/' + myMultipleProblem.id}>{myMultipleProblem.multiple_problem?.title}</a>
                          </TableCell>
                          <TableCell>{`${toPersianNumber(myMultipleProblem.multiple_problem?.problems_count || 0)} تایی`}</TableCell>
                          <TableCell>{`دنباله‌ی ${toPersianNumber(myMultipleProblem.step + 1)}`}</TableCell>
                          <TableCell>{myMultipleProblem.mark == -1 ? '-' : myMultipleProblem.mark}</TableCell>
                        </TableRow>
                      )
                    }
                    )}
                    {singleProblems.length + multipleProblems.length == 0 &&
                      <TableRow>
                        <TableCell>هنوز سوال تکی‌ گرفته نشده است!</TableCell>
                      </TableRow>
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item container xs={12} sm={4}>
              <Paper className={classes.paper}>
                <Grid item container direction='column' spacing={2}>
                  <Grid item>
                    <Typography variant="h2" align='center'>مسئله‌ی جدید</Typography>
                  </Grid>
                  <Divider />
                  <Grid item>
                    <FormControl size='small' >
                      <RadioGroup
                        row
                        defaultValue={'single'}
                        onChange={(e) => setRequestedProblemType(e.target.value)}
                      >
                        <FormControlLabel
                          value="single"
                          control={<Radio />}
                          label="تکی"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="multiple"
                          control={<Radio />}
                          label="دنباله‌دار"
                          labelPlacement="end"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  {requestedProblemType == 'single' &&
                    <>
                      <Grid item>
                        <FormControl size='small' variant="outlined" fullWidth>
                          <InputLabel>مبحث</InputLabel>
                          <Select
                            className={classes.dropDown}
                            onBlur={handleSelect}
                            name='subject'
                            label='مبحث'
                          >
                            {allSubjects.map((source) => (
                              <MenuItem value={source.id}>{source.title}</MenuItem>
                            ))}
                          </Select>
                        </FormControl >
                      </Grid>
                      <Grid item>
                        <FormControl size='small' variant="outlined" fullWidth>
                          <InputLabel>سختی</InputLabel>
                          <Select
                            className={classes.dropDown}
                            onBlur={handleSelect}
                            name='difficulty'
                            label='سختی'
                          >
                            <MenuItem value={'EASY'}>{'آسان'}</MenuItem>
                            <MenuItem value={'MEDIUM'}>{'متوسط'}</MenuItem>
                            <MenuItem value={'HARD'}>{'سخت'}</MenuItem>
                          </Select>
                        </FormControl >
                      </Grid>
                    </>
                  }
                  <Grid item>
                    <Button fullWidth variant='contained' color='primary' onClick={() => setDialogStatus(true)}>دریافت</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid >
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
  }
)(PlayerProblems)