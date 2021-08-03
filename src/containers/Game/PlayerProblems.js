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
import { Link } from 'react-router-dom';
import { toPersianNumber } from '../../utils/translateNumber'
import {
  getAllPlayerProblems,
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

const PlayerProblems = ({
  getAllPlayerProblems,
  getAllSubjects,
  allSubjects,
  playerProblems,
  isFetching
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [properties, setProperties] = useState({ difficulty: '', subject: '' });
  const [requestedProblemType, setRequestedProblemType] = useState('single');

  useEffect(() => {
    getAllPlayerProblems();
    getAllSubjects();
  }, [])


  const handleSelect = (e) => {
    setProperties({
      ...properties,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Container className={classes.container}>
      <Grid container spacing={2} justify='center'>
        <Grid item xs={12}>
          <Typography variant="h1" align="center">«مسئله‌های من»</Typography>
        </Grid>
        <Grid item container spacing={2} xs={12} md={10} lg={8}>
          <Grid item container xs={12} md={8} direction='column' spacing={2}>
            <Grid item>
              <TableContainer component={Paper}>
                <Table>
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
                    {playerProblems.map((myProblem, index) =>
                      <TableRow key={index}>
                        <TableCell>{toPersianNumber(myProblem.id)}</TableCell>
                        <TableCell >
                          <a as={Link} href={'/problem/' + myProblem.id}>{myProblem.problem.title}</a>
                        </TableCell>
                        <TableCell>{myProblem.problem.difficulty}</TableCell>
                        <TableCell>{myProblem.status}</TableCell>
                        <TableCell>{myProblem.mark == -1 ? '-' : myProblem.mark}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={4}>
            <Paper className={classes.paper}>
              <Grid item container direction='column' spacing={2}>
                <Grid item>
                  <Typography variant="h2" align='center'>مسئله‌ی جدید</Typography>
                </Grid>
                <Divider />
                <Grid item>
                  <FormControl size='small' >
                    <FormLabel>نوع</FormLabel>
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
                        value="consecutive"
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
                          <MenuItem value={'NORMAN'}>{'متوسط'}</MenuItem>
                          <MenuItem value={'HARD'}>{'سخت'}</MenuItem>
                        </Select>
                      </FormControl >
                    </Grid>
                  </>
                }
                <Grid item>
                  <Button fullWidth variant='contained' color='primary' >دریافت</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid >
    </Container>
  );
}

const mapStateToProps = (state) => ({
  allSubjects: state.game.allSubjects,
  playerProblems: state.game.playerProblems,
  isFetching: state.game.isFetching,
})


export default connect(
  mapStateToProps,
  {
    getAllSubjects,
    getAllPlayerProblems,
  }
)(PlayerProblems)