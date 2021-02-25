import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
  gameWidget: {
    width: '100%',
    borderRadius: 10,
    minHeight: 300,
    border: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.25)',
    maxHeight: '100vh',
  },
}));

const GameWidget = ({ link = '' }) => {
  const classes = useStyles();

  const [iFrameHeight, setIFrameHeight] = useState(500);

  return (
    <iframe
      title={'بازیچه'}
      src={link}
      className={classes.gameWidget}
    // style={{ height: iFrameHeight }}
    />
  );
};

export default GameWidget;
