import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import TinyPreview from '../../tiny_editor/react_tiny/Preview';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}))

const TextWidget = ({ text = '' }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <TinyPreview
        frameProps={{
          frameBorder: '0',
          scrolling: 'no',
          width: '100%',
        }}
        content={text}
      />
    </Paper>
  );
};

export default TextWidget;
