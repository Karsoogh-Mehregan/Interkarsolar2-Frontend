import React, { useState, useEffect } from 'react';
import ImgMediaCard from '../../components/Cards/Notification';
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
  statImage: {
    height: '40vh',
    background: `url(${process.env.PUBLIC_URL + '/logo.png'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
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
        alignItems='center'
      >
        <Grid item xs={12}>
          <ImgMediaCard />
        </Grid>
        <Grid item xs={12}>
          <ImgMediaCard />
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state, ownProps) => { };

export default connect(mapStateToProps, {})(AnnouncementsTab);
