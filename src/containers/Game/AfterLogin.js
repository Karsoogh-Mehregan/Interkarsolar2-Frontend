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

const AfterLogin = ({ }) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={2} justify='center'>
          <Grid item xs={12}>
            <Typography variant='h1' align="center">{'«انتخاب بازی»'}</Typography>
          </Grid>
          <Grid container item spacing={2} xs={6}>
            <ButtonGroup variant='contained'>
              <Button href='/game/1/my_problems' >پسرانه</Button>
              <Button href='/game/2/my_problems' >دخترانه</Button>
            </ButtonGroup>
          </Grid>
        </Grid >
      </Container>
    </>
  );

}


export default AfterLogin;