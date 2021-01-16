import {
  Button,
  Container,
  makeStyles,
  Paper,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PersonCard from '../../components/Cards/PersonCard'
import StaffInfo from './StaticData';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    backgroundColor: '#d8e7ed',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    lineHeight: '80px',
    color: '#4a0044',
    marginBottom: 30,
    textShadow: '-2px 2px #888',
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
      lineHeight: '40px',
    },
  },
  paper: {
    background: '#f8f1f1',
    padding: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

console.log(StaffInfo);


function Staff() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container direction='row'>
        <Grid container item direction='column'>
          <Grid item>
            <Typography variant='h2' align='center' className={classes.title}>
              «کارسوقی‌ها»
            </Typography>
          </Grid>
          <Grid container item direction='row' spacing={2}>
            {
              StaffInfo.map((staff) => {
                return (
                  <Grid item xs={3}>
                    <PersonCard
                      name={staff.name}
                      position={staff.position}
                      description={staff.description}
                      image={staff.image} />
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
});

export default connect(
  mapStateToProps
  , {}
)(Staff);
