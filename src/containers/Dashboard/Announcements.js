import React, { useState, useEffect } from 'react';
import ImgMediaCard from '../../components/Cards/notification';
import { Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PushButton from '../../components/Fancy/PushButton'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    width: '100wh',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const AnnouncementsTab = ({ }) => {
  const classes = useStyles();
  return (
    <>
      <div className={`dashboard-background`} />
      <Grid
        className={classes.root}
        container
        justify='space-evenly'
        direction='column'
        alignItems='center'
      >
        <ImgMediaCard />
      </Grid>
    </>
  );
};

const mapStateToProps = (state, ownProps) => { };

export default connect(mapStateToProps, {})(AnnouncementsTab);
