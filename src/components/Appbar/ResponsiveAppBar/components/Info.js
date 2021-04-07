import { makeStyles, Chip } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
  avatar: {},
}));

function Index({ score = 0 }) {
  const classes = useStyles();
  return (
    <Chip variant="outlined" color="primary" label={`چوق شما: ${score}`} />
  );
}

const mapStateToProps = (state) => ({
  score: state.formula0.team ? state.formula0.team.score : '?',
});

export default connect(mapStateToProps)(Index);
