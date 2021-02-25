import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
  gameWidget: {
    width: '100%',
    height: '95vh',
    borderRadius: 10,
    minHeight: 300,
    border: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.25)',
    maxHeight: '100vh',
  },
}));

const GameWidget = ({ link = '' }) => {
  const classes = useStyles();
  return (
    <iframe
      title='بازیچه'
      src={link}
      className={classes.gameWidget}
    />
  );
};

export default GameWidget;
