import { Button, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

import TinyPreview from '../../tiny_editor/react_tiny/Preview';
import TinyEditorComponent from '../../tiny_editor/react_tiny/TinyEditorComponent';

const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const BigAnswerQuestionWidget = ({
  text = '',
}) => {
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
      <TinyEditorComponent
        id={`edit-big-answer-${Math.floor(Math.random() * 1000)}`}
        content={'جوابت به سوال بالا رو این جا بنویس!'}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="small"
        className={classes.submit}>
        ذخیره جواب
      </Button>
    </Paper>
  );
};

export default BigAnswerQuestionWidget;
