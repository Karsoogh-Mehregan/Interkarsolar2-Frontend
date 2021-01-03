import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    height: '100vh',
  },
}))


const ExamsTab = ({

}) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid>
        this is exams tab
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {

}

export default connect(
  mapStateToProps,
  {

  }
)(ExamsTab);