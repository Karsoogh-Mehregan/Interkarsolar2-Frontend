import React, { useState, useEffect } from 'react';
import ImgMediaCard from '../../components/Cards/notification';
import { Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(9),
    },
  },
}));

const AnnouncementsTab = ({}) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} style={{ paddingTop: 100 }}>
      <ImgMediaCard />
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {};

export default connect(mapStateToProps, {})(AnnouncementsTab);
